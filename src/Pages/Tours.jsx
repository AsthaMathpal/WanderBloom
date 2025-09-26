// src/Pages/Tours.jsx
import React from 'react';
import TopBanner from '../Components/TopBanner';
import Bali from '../assets/Bali.jpg';
import Disneyland from '../assets/Disneyland.jpg';
import Greece from '../assets/Greece.jpg';
import India from '../assets/India.jpg';
import Paris from '../assets/paris.jpg';
import Spain from '../assets/Spain.jpg';
import Tokyo from '../assets/Tokyo.jpg';
import Tomorrowland from '../assets/Tomorrowland.jpg';
import Venice from '../assets/Venice.jpg';

import { Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tours = () => {
  const destinationJson = [
    { name: 'Bali', img: Bali, time: '5 Days - 4 Nights', star: '3.5 (123 reviews)', price: '69,999' },
    { name: 'Disneyland', img: Disneyland, time: '6 Days - 5 Nights', star: '4.8 (92 reviews)', price: '79,999' },
    { name: 'Greece', img: Greece, time: '5 Days - 4 Nights', star: '3.6 (88 reviews)', price: '99,999' },
    { name: 'India', img: India, time: '5 Days - 4 Nights', star: '4.3 (77 reviews)', price: '69,999' },
    { name: 'Paris', img: Paris, time: '5 Days - 4 Nights', star: '4.9 (72 reviews)', price: '89,999' },
    { name: 'Spain', img: Spain, time: '5 Days - 4 Nights', star: '5.0 (66 reviews)', price: '95,999' },
    { name: 'Tokyo', img: Tokyo, time: '5 Days - 4 Nights', star: '3.8 (55 reviews)', price: '85,999' },
    { name: 'Tomorrowland', img: Tomorrowland, time: '7 Days - 6 Nights', star: '5.0 (68 reviews)', price: '120,999' },
    { name: 'Venice', img: Venice, time: '5 Days - 4 Nights', star: '4.4 (48 reviews)', price: '69,999' },
  ];

  return (
    <>
      <TopBanner text="Tours" />
      <div className='max-w-7xl md:mx-auto my-10 px-4'>
        <h1 className='text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center'>Top Destinations</h1>
        <hr className='text-teal-500 w-[200px] bg-teal-500 mx-auto h-1 mb-10' />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-5'>
          {destinationJson.map((destination) => (
            <div key={destination.name} className='overflow-hidden border shadow-lg shadow-gray-300 rounded-lg mb-5 w-full'>
              <img
                src={destination.img}
                alt={destination.name}
                className='object-cover w-full h-48 hover:scale-110 transition-transform duration-300'
              />
              <div className='p-4'>
                <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'>
                  <Clock width={15} /> {destination.time}
                </p>
                <h3 className='text-xl font-bold mb-2'>{destination.name}</h3>
                <p className='flex gap-1 items-center text-sm mb-2'>
                  <Star width={16} height={16} fill="#FFD700" stroke="#FFD700" /> {destination.star}
                </p>
                <p className='text-gray-500 mb-4 mt-2 text-sm'>
                  Experience the beauty and culture of {destination.name}
                </p>
                <div className='flex gap-4'>
                  {/* Price Button */}
                  <button className='px-3 py-2 bg-teal-500  hover:bg-yellow-500 rounded-md text-white text-sm'>
                    ₹{destination.price}
                  </button>
                  {/* Book Now Button */}
                  <Link
                    to="/booking"
                    className='px-3 py-2 bg-black rounded-md text-white hover:bg-pink-700 text-sm'
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tours;
