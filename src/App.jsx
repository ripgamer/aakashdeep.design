import React, { useState, useEffect } from "react";
import Marquee from "@/components/ui/marquee";
import { MarqueeDemo } from './components/ui/marqueeDemo';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [boundaryPosition, setBoundaryPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Lag effect for the boundary circle
    const interval = setInterval(() => {
      setBoundaryPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15, // Adjust the lag effect
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    }, 16); // 60fps for smooth transition

    return () => clearInterval(interval);
  }, [position]);

  return (
    <>
      {/* Boundary Circle (Hollow) */}
      <div
        style={{
          position: "fixed",
          top: boundaryPosition.y,
          left: boundaryPosition.x,
          width: "35px", // Boundary circle size
          height: "35px",
          border: "1px solid red", // Border to make it hollow
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "top 0.1s ease, left 0.1s ease", // Smooth transition
          zIndex: 9999, // Ensure it's behind the red dot
        }}
      />

      {/* Inner Circle (Red Dot) */}
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "9px", // Red dot size
          height: "9px",
          backgroundColor: "red",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "top 0.1s ease, left 0.1s ease", // Smooth transition
          zIndex: 10000, // Ensure it's on top of the boundary
        }}
      />
    </>
  );
};

function App() {
  return (
    <div className="bg-black flex items-center justify-center h-screen w-screen text-white relative">
      {/* Animated Cursor - Visible only on md and larger screens */}
      <div className="hidden md:block">
        <AnimatedCursor />
      </div>
      
      {/* Marquee Demo */}
      <div className="absolute inset-0 z-10">
        <MarqueeDemo repeat="2" />
      </div>
      
      
    </div>
  );
}

export default App;
