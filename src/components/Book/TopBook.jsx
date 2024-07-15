import React from 'react'
import topBook from '../../shared/components/Partials/assets/Booking.jpg';

const TopBook = () => {
  return (
    <div className="relative pt-28">
        <img src={topBook} alt="" className="w-full h-auto"/>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold shine-text">BOOK NOW</h1>
        </div>
    </div>

  )
}

export default TopBook