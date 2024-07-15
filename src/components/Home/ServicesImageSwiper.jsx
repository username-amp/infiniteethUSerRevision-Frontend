// src/components/Home/ServicesImageSwiper.jsx

import React, { useRef } from 'react';
import Image1 from '../../shared/components/Partials/assets/image1.jpg';
import Image2 from '../../shared/components/Partials/assets/image2.jpg';
import Image3 from '../../shared/components/Partials/assets/image3.jpg';
import Image4 from '../../shared/components/Partials/assets/image4.jpg';
import Image5 from '../../shared/components/Partials/assets/image5.jpg';

const ServicesImageSwiper = () => {
  const images = [Image1, Image2, Image3, Image4, Image5];
  const containerRef = useRef(null);

  const scrollToNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + containerRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrevious = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - containerRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative mt-20">
      <button onClick={scrollToPrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-cyan-400 opacity-85 text-white px-4 py-2 rounded-l-md z-10">
        &lt;
      </button>
      <div
        ref={containerRef}
        className="flex items-center overflow-hidden whitespace-nowrap"
        style={{
          WebkitOverflowScrolling: 'touch', // For iOS smooth scrolling
          scrollBehavior: 'smooth', // For modern browsers
          width: '100%', // Ensure container takes full width
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Service Image ${index + 1}`}
            className={`inline-block max-h-64 w-auto h-auto  opacity-100 ${index === 2 || index === 4 ? 'max-h-full max-w-full' : 'max-h-64 max-w-full'}`} // Adjust max sizes for Image3 and Image5
            style={{ maxHeight: '100%', maxWidth: '30%' }} // Adjust maxWidth as needed
          />
        ))}
      </div>
      <button onClick={scrollToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-cyan-400 opacity-85 text-white px-4 py-2 rounded-r-md z-10">
        &gt;
      </button>
    </div>
  );
};

export default ServicesImageSwiper;
