'use client';

import React from 'react';
import TourInfo from './TourInfo';

const NewTour = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
  };

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
          <button className='btn btn-accent join-item'>generate tour</button>
        </div>
      </form>
      <div className='mt-16'>
        <TourInfo />
      </div>
    </>
  );
};

export default NewTour;
