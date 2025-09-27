// src/Components/FeatureDestination.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Clock, Star } from 'lucide-react';
import '../Components/Css/reactSlick.css';

// Import images from assets
import Bali from '../assets/Bali.jpg';
import Disneyland from '../assets/Disneyland.jpg';
import Greece from '../assets/Greece.jpg';
import India from '../assets/India.jpg';
import Paris from '../assets/paris.jpg';
import Spain from '../assets/Spain.jpg';
import Tokyo from '../assets/Tokyo.jpg';
import Tomorrowland from '../assets/Tomorrowland.jpg';
import Venice from '../assets/Venice.jpg';

// Import arrows
import NextArrowImg from '../assets/next.png';
import PrevArrowImg from '../assets/back.png';

// Custom Next Arrow
const SlickArrowNext = ({ className, style, onClick }) => (
  <img
    src={NextArrowImg}
    alt="next"
    className={`${className} w-7 h-7 cursor-pointer z-10`}
    style={{ ...style }}
    onClick={onClick}
  />
);

// Custom Prev Arrow
const SlickArrowPrev = ({ className, style, onClick }) => (
  <img
    src={PrevArrowImg}
    alt="prev"
    className={`${className} w-7 h-7 cursor-pointer z-10`}
    style={{ ...style }}
    onClick={onClick}
  />
);

const FeatureDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SlickArrowNext />,
    prevArrow: <SlickArrowPrev />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const destinations = [
    { name: 'Bali', img: Bali, time: '5 Days - 4 Nights', star: '3.5 (123 reviews)', price: '69,999' },
    { name: 'Disneyland', img: Disneyland, time: '6 Days - 5 Nights', star: '4.8 (92 reviews)', price: '79,999' },
    { name: 'Greece', img: Greece, time: '5 Days - 4 Nights', star: '3.6 (88 reviews)', price: '99,999' },
    { name: 'India', img: India, time: '5 Days - 4 Nights', star: '4.3 (77 reviews)', price: '69,999' },
    { name: 'Paris', img: Paris, time: '5 Days - 4 Nights', star: '4.9 (72 reviews)', price: '89,999' },
    { name: 'Spain', img: Spain, time: '5 Days - 4 Nights', star: '5.0 (66 reviews)', price: '95,999' },
    { name: 'Tokyo', img: Tokyo, time: '5 Days - 4 Nights', star: '3.8 (55 reviews)', price: '85,999' },
    { name: 'Tomorrowland', img: Tomorrowland, time: '7 Days - 6 Night', star: '5.0 (68 reviews)', price: '120,999' },
    { name: 'Venice', img: Venice, time: '5 Days - 4 Nights', star: '4.4 (48 reviews)', price: '69,999' },
  ];

  return (
    <section className="w-full py-10 md:py-16 lg:pt-31 px-4 md:px-0">
      <div className="max-w-7xl mx-auto px-6 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-3 font-serif">
        Featured Destinations
       </h2>
      <hr className="bg-teal-500 h-1 mx-auto mb-11 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-60" />
        <Slider {...settings}>
          {destinations.map((dest) => (
            <div key={dest.name} className="px-2">
              <div className="overflow-hidden border shadow-md shadow-gray-400 rounded-lg flex flex-col min-h-full relative">
                {/* Image */}
                <div className="w-full overflow-hidden rounded-t-lg">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-44 md:h-56 lg:h-60 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-3 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-gray-500 flex items-center gap-1 text-xs mb-1">
                      <Clock width={14} /> {dest.time}
                    </p>
                    <h3 className="text-lg font-bold mb-1">{dest.name}</h3>
                    <p className="flex gap-1 items-center text-xs mb-2">
                      <Star width={14} height={14} fill="#FFD700" stroke="#FFD700" /> {dest.star}
                    </p>
                    <p className="text-gray-600 text-xs mb-3 leading-snug">
                      Immerse yourself in the breathtaking beauty and cultural heritage of {dest.name}.
                    </p>
                  </div>

                  {/* Price + Book Now */}
                  <div className="flex gap-2 mt-2 pb-3">
                    <button className="px-2 py-1 bg-teal-500 hover:bg-yellow-500 rounded-md text-white text-xs">
                      ₹{dest.price}
                    </button>
                    <Link
                      to="/booking"
                      className="bg-black px-3 py-2 text-white rounded-md font-semibold hover:bg-pink-700 transition-colors duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeatureDestination;
