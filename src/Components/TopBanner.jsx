import React from 'react';
import banner from '../assets/TopBanner.jpg';

const TopBanner = ({ text }) => {
  return (
    <div
      className="relative h-[370px] w-full"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-2xl lg:text-4xl font-bold font-serif text-center">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default TopBanner;
