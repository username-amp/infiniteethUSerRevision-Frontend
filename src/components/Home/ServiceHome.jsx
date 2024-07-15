import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import basic from '../../shared/components/Partials/assets/basic.jpg';
import specialized from '../../shared/components/Partials/assets/specialized.jpg';
import './ServiceHome.css'; // Import your CSS file for animations

const ServiceHome = () => {
  const serviceRef = useRef(null);

  useEffect(() => {
    const serviceElement = serviceRef.current;
    
    const handleScroll = () => {
      if (serviceElement) {
        const elementTop = serviceElement.getBoundingClientRect().top;
        const isVisible = elementTop < window.innerHeight;

        if (isVisible) {
          serviceElement.classList.add('slide-in'); // Apply slide-in animation class
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={serviceRef} className="p-4 mb-10">
      <div className="text-center py-12 text-3xl md:text-5xl font-semibold text-orange-500">
        <h1>Services</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40">
        <div className="flex flex-col items-center">
          <img src={basic} alt="basic" className="w-full h-64 md:h-96 object-cover rounded-2xl" />
          <div className="text-center mt-4">
            <h2 className="text-xl md:text-2xl text-orange-500 p-2 md:p-5 font-semibold">Basic Dental Services</h2>
            <Link to="/services/basic-dental-services">
              <button className="text-lg font-thin bg-blue-300 p-2 rounded-full px-4 text-white">View Services</button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src={specialized} alt="specialized" className="w-full h-64 md:h-96 object-cover rounded-2xl" />
          <div className="text-center mt-4">
            <h2 className="text-xl md:text-2xl text-orange-500 p-2 md:p-5 font-semibold">Specialized Services</h2>
            <Link to="/services/specialized-services">
              <button className="text-lg font-thin bg-blue-300 p-2 rounded-full px-4 text-white">View Services</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHome;
