import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Search } from 'lucide-react';

const Hero = () => {
  // Make sure all hero images are in public/ with exact names
  const banners = [
    '/Hero1.jpg',
    '/Hero2.jpg',
    '/Hero3.jpg',
    '/Hero4.jpg',
    '/Hero5.jpg'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container -mt-12 overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <div
              className='h-[650px] lg:h-[800px] relative'
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className='absolute inset-0 bg-black opacity-60'></div>
              <div className='relative max-w-7xl mx-auto'>
                <div className='flex h-[650px] justify-center items-center lg:pt-0 pt-20'>
                  <div className='flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0'>
                    <h1 className='text-white font-bold text-4xl lg:text-6xl'>
                      Discover Your Next Adventure
                    </h1>
                    <p className='text-white lg:text-lg lg:w-[700px]'>
                      Explore breathtaking destinations, create unforgettable memories and embark on the journey of a lifetime.
                    </p>
                    <Link
                      to="/booking"
                      className='bg-teal-500 px-3 py-2 text-white hover:bg-pink-700 rounded-md font-semibold'
                    >
                      Start Exploring
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Search Box */}
      <div className='hidden lg:flex absolute inset-x-0 bottom-[20%] justify-center z-10'>
        <div className='bg-white border border-gray-300 shadow-lg rounded-md w-[1050px] p-4 flex gap-3'>
          <div className='grid gap-5 grid-cols-4 flex-grow'>
            <div className='flex flex-col gap-2'>
              <label className='flex font-semibold gap-1 items-center'>
                <Search className='w-4 h-4' />Location
              </label>
              <select className='border border-gray-300 rounded-sm p-1'>
                <option value="">Select Options</option>
                <option>Bali</option>
                <option>Disneyland</option>
                <option>Greece</option>
                <option>India</option>
                <option>Paris</option>
                <option>Spain</option>
                <option>Tokyo</option>
                <option>Tomorrowland</option>
                <option>Venice</option>
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Check In</label>
              <input type="date" className='border p-1 border-gray-300 rounded-sm' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Check Out</label>
              <input type="date" className='border p-1 border-gray-300 rounded-sm' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='flex font-semibold gap-2 items-center'>
                <Search className='w-4 h-4' />Guest
              </label>
              <select className='border border-gray-300 rounded-sm p-1'>
                <option value="">Select Options</option>
                <option>2 Guest 1 Children</option>
                <option>2 Guest 2 Children</option>
                <option>3 Guest 2 Children</option>
                <option>4 Guest 2 Children</option>
                <option>4 Guest 3 Children</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col justify-end'>
            <Link
              to="/booking"
              className='bg-teal-500 px-3 py-2 text-white rounded-md font-semibold hover:bg-pink-700 transition-colors duration-300'
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
