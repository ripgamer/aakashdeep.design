import React from 'react';
import BlurIn from './blur-in';
import ShinyButton from './shiny-button';
function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center mb-10 p-10 h-screen overflow-x-hidden overflow-y-auto w-full">
      <div className="flex flex-col items-center justify-center pt-40 md:pt-40 overflow-hidden w-full">
        {/* Hero Image */}
        <div className="flex justify-center">
          <img className="w-64 md:w-96" src="/img/hero3.png" alt="Hero Image" />
        </div>

        {/* Text Section */}
        <div className="absolute text-center mt-36  md:mt-56">
          <BlurIn
            word="I will Create Stunning"
            className="text-2xl md:text-5xl font-bold text-black dark:text-white"
          />
         
          <BlurIn
            word="Poster Designs, Logos and"
            className="text-2xl md:text-5xl font-bold text-black dark:text-white"
          />
          
          <BlurIn
            word="Motion graphics"
            className="text-2xl md:text-5xl font-bold text-black dark:text-white"
          />
        </div>
        <div className='mt-20 md:mt-20 gap-2 md:gap-10  flex items-center justify-between'> 
  <ShinyButton>schedule a call</ShinyButton>   <ShinyButton>Our Work</ShinyButton>
  </div>
      </div>
    </div>
  );
}

export default Hero;
