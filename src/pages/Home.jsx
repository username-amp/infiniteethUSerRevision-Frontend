import React from 'react';
import TopContent from '../components/Home/TopContent';
import ServiceHome from '../components/Home/ServiceHome';
import ServicesImageSwiper from '../components/Home/ServicesImageSwiper';
import LookingHome from '../components/Home/LookingHome';

const Homepage = () => {
  return (
   <>
   <TopContent />
   <ServiceHome />
   <ServicesImageSwiper />
   <LookingHome />
   </>
  );
};

export default Homepage;
