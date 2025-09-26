import React from 'react';
import banner from '../assets/banner.jpg';

const Banner = () => {
  return (
    <div
      className='h-[500px] relative flex items-center'
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='bg-black inset-0 opacity-65 absolute'></div>
      <div className='text-white flex-col flex items-center justify-center px-4 lg:px-0 text-center max-w-7xl mx-auto z-20'>
        <h2 className='lg:text-6xl text-4xl font-bold mb-6'>Curious About the World?</h2>
        <p className='text-xl mb-8'>Turn your travel dreams into unforgettable adventures today.</p>
        <button className='bg-teal-500 hover:bg-pink-500 transition-colors duration-300 px-3 py-2 rounded-md text-white'>
          Shall We Wander?
        </button>
      </div>
    </div>
  );
};

export default Banner;
