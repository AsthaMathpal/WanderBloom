import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero';
import FeatureDestination from './Components/FeatureDestination';
import Features from './Components/Features';
import GalleryComp from './Components/GalleryComp';
import Banner  from './Components/Banner';
import ContactComp from './Components/ContactComp';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';

// Pages
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Tours from './Pages/Tours';
import Contact from './Pages/Contact';
import Booking from './Pages/Booking';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* No padding on top, content starts from very top */}
      <div className="min-h-screen">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Hero />
              <FeatureDestination />
              <Features />
              <GalleryComp />
              <Banner/>
              <ContactComp />
            </>
          } />

          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;