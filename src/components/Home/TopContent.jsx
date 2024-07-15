import React from 'react'
import dentistpic from '../../shared/components/Partials/assets/homedentist.jpg';
import { Link } from 'react-router-dom'

const TopContent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img 
        src={dentistpic} 
        alt="Dentist" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute inset-0 flex items-center  bg-black bg-opacity-50">
        <div className="text-white  m-32 pt-72">
          <h1 className="text-5xl font-thin ">Lorem ipsum dolor sit amet consectetur  <br /> adipisicing elit. Eaque, est nesciunt 
          </h1>
         
          <Link to="/book">
          <button className="mt-6 bg-orange-500 text-xl font-bold p-5 rounded-full">BOOK AN APPOINTMENT</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopContent