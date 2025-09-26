import React from 'react';
import footer from '../assets/footer-pattern.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className='bg-gray-800 text-white py-10'
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      }}
    >
      <div className='max-w-7xl mx-auto px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Brand Info */}
          <div>
            <h1 className='font-bold text-5xl mb-4'>
              <span className='text-teal-500'>Wander</span>Bloom
            </h1>
            <p className='text-sm'>
              We're dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences.
            </p>
          </div>

          {/* Contact & Social */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
            {/* Contact Us */}
            <div>
              <h3 className='text-lg font-semibold mb-6'>Contact Us</h3>
              <ul className='space-y-2 text-sm'>
                <li>Sector 44, Noida, India</li>
                <li>Phone: +91 9876543210</li>
                <li>Email: info@wanderbloom.com</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className='mt-6 md:mt-0 md:ml-8'>
              <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
              <div className='flex space-x-4'>
                <FaFacebook className='hover:text-pink-500 cursor-pointer' />
                <FaInstagram className='hover:text-pink-500 cursor-pointer' />
                <FaTwitter className='hover:text-pink-500 cursor-pointer' />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-12 pt-12 border-t border-gray-700 text-center text-sm'>
          <p>&copy; {new Date().getFullYear()} WanderBloom. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
