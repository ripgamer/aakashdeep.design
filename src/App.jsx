import React, { useState, useEffect } from 'react';
import Marquee from '@/components/ui/marquee';
import { MarqueeDemo } from './components/ui/marqueeDemo';
import Hero from './components/ui/hero';
import Navbar from './components/ui/navbar';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [boundaryPosition, setBoundaryPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoundaryPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
    }, 16);

    return () => clearInterval(interval);
  }, [position]);

  return (
    <>
      {/* Outer Boundary */}
      <div
        style={{
          position: 'fixed',
          top: boundaryPosition.y,
          left: boundaryPosition.x,
          width: '35px',
          height: '35px',
          border: '1px solid red',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />
      {/* Inner Red Dot */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '9px',
          height: '9px',
          backgroundColor: 'red',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
        }}
      />
    </>
  );
};

function App() {
  return (
    <div className="bg-black text-white relative">
      <Navbar></Navbar>
      {/* Animated Cursor */}
      <div className="hidden md:block">
        <AnimatedCursor />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center mt-[-13rem] justify-center w-full overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Marquee Section */}
        <div className="w-full mt-16">
          <MarqueeDemo repeat="2" />
        </div>
      </div>
    </div>
  );
}

export default App;
