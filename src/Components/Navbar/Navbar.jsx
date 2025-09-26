import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll state on route change
  useEffect(() => {
    setScrolled(false);
    window.scrollTo(0, 0); // scroll top on navigation
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled || location.pathname !== '/' 
          ? 'bg-black/70 backdrop-blur-sm' 
          : 'bg-black/80'
      }`}
    >
      <div className='max-w-8xl mx-auto flex justify-between items-center py-5 px-5'>
        {/* Logo */}
        <Link to='/' className='text-2xl font-bold text-white'>
          Wander<span className='text-teal-500'>Bloom</span>
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-6'>
          <Link to='/' className='text-white font-semibold text-lg hover:text-pink-500'>Home</Link>
          <Link to='/about' className='text-white font-semibold text-lg hover:text-pink-500'>About Us</Link>
          <Link to='/tours' className='text-white font-semibold text-lg hover:text-pink-500'>Tours</Link>
          <Link to='/gallery' className='text-white font-semibold text-lg hover:text-pink-500'>Gallery</Link>
          <Link to='/contact' className='text-white font-semibold text-lg hover:text-pink-500'>Contact</Link>

          <Link
            to="/booking"
            className='bg-teal-500 px-4 py-1 rounded-md font-semibold text-white hover:bg-pink-600 transition-all'
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <HiMenuAlt1
          onClick={toggleMenu}
          className='md:hidden text-white cursor-pointer'
          size={28}
        />
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Navbar;
