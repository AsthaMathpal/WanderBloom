import React from 'react'
import TopBanner from '../Components/TopBanner'
import trip from '../assets/trip.gif'
import time from '../assets/fire-time.gif'
import price from '../assets/best-price.gif'

const About = () => {
  return (
    <div>
     <TopBanner text='About'/>
     <div className='max-w-7xl mx-auto my-10'>
      <div className='flex flex-col md:flex-row px-4 md:px-0 gap-4'>
        <div className='flex-1'>
          <div className='relative'>
            <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="travel" className='rounded-lg'/>
            <div className='absolute bottom-[45%] right-0 p-4 bg-teal-500 text-white font-bold md:text-4xl rounded-lg'>
              HOW WE ARE BEST <br /> FOR TRAVEL!
            </div>
          
          </div>
          <h1 className='md:text-4xl font-bold mt-6 mb-4 text-3xl'>How We Are Best For Travel !</h1>
          <p className='text-gray-500'>Step into a world where the skies paint themselves in shades of rose and gold, where the air carries the scent of blooming flowers and salty ocean breeze. Wander along cobblestone streets that whisper stories of generations past, pause at hidden cafés where time slows and laughter lingers in the air. Each sunrise brings a promise of discovery — a secluded beach kissed by the morning sun, a mountain path lined with ancient trees, or a city square buzzing with vibrant life and colors. Let your footsteps follow the rhythm of adventure, let your heart collect memories in the folds of sunsets, the sparkle of distant lights, and the warmth of people you meet along the way. Travel is not just a journey; it’s an art, a story, a feeling that lingers long after the journey ends. Pack your curiosity, carry your joy, and leave your footprints where dreams meet reality.</p>
        </div>
        <div className='flex-1'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={trip} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>50+ Destination</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
          <div className='bg-white p-6 my-4 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={price} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>Best Price</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={time} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>Super Fast Booking</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default About