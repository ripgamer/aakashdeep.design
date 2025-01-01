import React from 'react';
import BlurIn from './blur-in';
import ShinyButton from './shiny-button';

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center mt-36 md:mt-0 h-full w-full px-4">
      {/* Hero Image */}
      <div className="absolute top-1/4 md:top-1/3 transform -translate-x-1/2 left-1/2">
        <img className="w-64 md:w-96" src="/img/hero3.png" alt="Hero Image" />
      </div>

      {/* Text Section */}
      <div className="mt-80 md:mt-[500px] text-center space-y-4">
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

      {/* Subtitle Section */}
      <div className="mt-4 text-center space-y-2">
        <BlurIn
          word="Transforming your ideas into reality get impactful and unforgeable work "
          className="text-sm md:text-xl font-semibold text-black dark:text-[#5B5B5B]"
        />
        {/* <BlurIn
          word="Engaging Designs for Maximum Impact"
          className="text-xl md:text-3xl font-semibold text-black dark:text-[#5B5B5B]"
        />
        <BlurIn
          word="Delivering Excellence Every Time"
          className="text-xl md:text-3xl font-semibold text-black dark:text-[#5B5B5B]"
        /> */}
      </div>

      {/* Button Section */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <ShinyButton>Schedule a Call</ShinyButton>
        <ShinyButton>Our Work</ShinyButton>
      </div>
    </div>
  );
}

export default Hero;
