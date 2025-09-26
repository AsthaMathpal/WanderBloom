import { X } from 'lucide-react';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[75%] bg-white shadow-md rounded-l-xl transform transition-transform duration-300 md:hidden z-50
        ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className='flex flex-col justify-between h-full px-6 py-6'>
        {/* Header / Close button */}
        <div>
          <button
            className='border border-black rounded-lg absolute top-4 right-4 p-1'
            onClick={() => setShowMenu(false)}
          >
            <X />
          </button>

          {/* Pinterest-style User Card */}
          <div className='flex items-center gap-3 mt-8 bg-pink-50 p-3 rounded-xl shadow-md  border-pink-600'>
            <FaUserCircle size={50} className='text-pink-300' />
            <div>
              <h1 className='font-semibold text-black'>Hello User</h1>
              <h1 className='text-sm text-gray-500'>Explorer</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className='mt-12'>
            <ul className='flex flex-col gap-4 text-xl'>
              <Link to='/' onClick={() => setShowMenu(false)}><li>Home</li></Link>
              <Link to='/about' onClick={() => setShowMenu(false)}><li>About Us</li></Link>
              <Link to='/tours' onClick={() => setShowMenu(false)}><li>Tours</li></Link>
              <Link to='/gallery' onClick={() => setShowMenu(false)}><li>Gallery</li></Link>
              <Link to='/contact' onClick={() => setShowMenu(false)}><li>Contact</li></Link>

              {/* Fixed Book Now Button */}
              <Link
                to="/booking"
                onClick={() => setShowMenu(false)}
                className='bg-teal-500 text-white px-4 py-2 hover:bg-pink-700 rounded-md font-semibold mt-4 text-center'
              >
                Book Now
              </Link>
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div className='text-center'>
          <h1>Made with ❤️ by Astha</h1>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
