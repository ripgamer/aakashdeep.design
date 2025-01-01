import React from 'react';
import BlurIn from './blur-in';
import ShinyButton from './shiny-button';

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center mt-20 md:mt-0 h-full w-full px-4">
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
        <div>
        <BlurIn
          word="Motion graphics"
          className="text-2xl md:text-5xl font-bold text-black dark:text-white"
        />
        <span className='flex items-center justify-center mt-[-2px]'><svg width="232" height="11" viewBox="0 0 232 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.63189 8.49393C-2.04389 7.99271 0.354855 7.4915 0.354855 7.4915C0.354855 7.4915 110.214 2.47935 124.127 1.97814C138.039 1.47693 225.831 -1.02915 228.229 0.474497C230.628 1.97814 227.27 3.48178 223.432 4.98543C219.594 6.48907 236.865 7.99271 230.628 8.49393C224.392 8.99514 124.127 7.4915 124.127 7.4915L1.31438 11C1.31438 11 13.3077 8.99514 5.63189 8.49393Z" fill="#FF4F00"/>
</svg>
</span></div>
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
