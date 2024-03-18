import React from 'react';
import Sidebar from '@/components/Sidebar';
import { FaAlignCenter } from 'react-icons/fa6';

const layout = ({ children }) => {
  return (
    // <div className='drawer lg:drawer-open'>
    //   <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
    //   <div className='drawer-content'>
    //     {/* Page content here */}
    //     <label
    //       htmlFor='my-drawer-2'
    //       className='drawer-button lg:hidden fixed top-6 right-6'
    //     >
    //       <FaAlignCenter className='w-8 h-8 text-primary' />
    //     </label>
    //     <div className='bg-base-200 px-8 py-12 min-h-screen'>{children}</div>
    //   </div>
    //   <div className='drawer-side bg-base-200'>
    //     <label
    //       htmlFor='my-drawer-2'
    //       aria-label='close sidebar'
    //       className='drawer-overlay'
    //     ></label>
    //     <Sidebar />
    //   </div>
    // </div>

    <div className='drawer lg:drawer-open'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer'
          className='drawer-button lg:hidden fixed top-6 right-6'
        >
          <FaAlignCenter className='w-8 h-8 text-accent' />
        </label>
        <div className='bg-base-100  px-8 py-12 min-h-screen'>{children}</div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <div
          className='menu p-4 w-80 bg-base-200 text-base-content'
          style={{ height: '100%' }}
        >
          {/* Sidebar content here */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default layout;
