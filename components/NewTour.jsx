'use client';

import React from 'react';
import TourInfo from './TourInfo';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import {
  createNewTour,
  generateTourResponse,
  getExistingTour,
} from '@/utils/actions';
import toast from 'react-hot-toast';

const NewTour = () => {
  const queryClient = useQueryClient();
  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const existingTour = await getExistingTour(destination);
      console.log('existing tour', existingTour);
      if (existingTour) return existingTour;

      const newTour = await generateTourResponse(destination);
      console.log('new tour', newTour);
      if (newTour) {
        await createNewTour(newTour);
        queryClient.invalidateQueries({ queryKey: ['tours'] });
        return newTour;
      }
      toast.error('No matching city found...');
      return null;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  if (isPending) {
    return <span className='loading loading-lg'></span>;
  }

  return (
    <>
      <form className='max-w-2xl' onSubmit={handleSubmit}>
        <h2 className='mb-4'>Select your dream tour</h2>
        <div className='join w-full'>
          <input
            type='text'
            placeholder='city'
            name='city'
            required
            className='join-item w-full input input-bordered'
          />
          <input
            type='text'
            placeholder='country'
            name='country'
            required
            className='join-item w-full input input-bordered'
          />
          <button
            className='btn btn-accent join-item'
            type='submit'
            disabled={isPending}
          >
            {isPending ? 'please wait...:' : 'generate tour'}
          </button>
        </div>
      </form>
      <div className='mt-16'>
        <div className='mt-16'>{tour ? <TourInfo tour={tour} /> : null}</div>
      </div>
    </>
  );
};

export default NewTour;
