"use client"
import hero1 from '../../public/hero1.jpg';
import hero2 from '../../public/hero2.jpg';
import React, { useState, useEffect } from 'react';

const images = [hero1, hero2, hero2]; // Add your image paths here

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 1000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="z-10 text-white text-center absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl md:text-6xl font-bold">Your Website Name</h1>
        <p className="text-lg md:text-xl mt-4">Your tagline goes here</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6">Get Started</button>
      </div>
      <div className="absolute inset-0 flex items-center justify-center md:justify-end">
        {images.map((image, index) => (
          <div
            key={index}
            className={`md:w-[50%] h-[70vh] absolute transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt="Slide"
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;