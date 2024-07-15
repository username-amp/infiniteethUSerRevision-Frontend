import React from 'react';
import aboutPhoto from '../../shared/components/Partials/assets/interior.jpg';
import './AboutTop.css'; // Assuming you have a CSS file for styling

const AboutTop = () => {
  return (
    <div className="relative pt-28">
      <img src={aboutPhoto} alt="" className="w-full" />
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Black overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold shine-text">ABOUT US</h1>
      </div>
    </div>
  );
}

export default AboutTop;
