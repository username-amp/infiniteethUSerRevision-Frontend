import React from 'react';
import { Link } from 'react-router-dom';

const LookingHome = () => {
  return (
    <div className="flex flex-col md:flex-row bg-blue-300 justify-between items-center px-6 md:px-10 lg:px-16 xl:px-20 py-10 md:py-20 text-white">
      <div className="flex flex-col gap-5 text-center md:text-left md:items-start md:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Looking for a Dentist?</h1>
        <p className="text-lg md:text-xl">Book a Free Consultation</p>
      </div>
      <div className="mt-5 md:mt-0 md:w-1/2 md:flex md:justify-end">
      <Link to="/book">
        <button className="bg-orange-500 px-8 md:px-10 lg:px-12 py-2 text-lg text-white rounded-full font-light">
          BOOK NOW!
        </button>
      </Link>
      </div>
    </div>
  );
};

export default LookingHome;
