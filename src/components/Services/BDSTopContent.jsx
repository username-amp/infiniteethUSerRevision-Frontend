import React from 'react'
import topservice from '../../shared/components/Partials/assets/topservice.jpg';

const BDSTopContent = () => {
  return (
    <div className="relative pt-32">
        <img src={topservice} alt="" className="w-full h-auto"/>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold shine-text">BASIC DENTAL SERVICES</h1>
        </div>
    </div>
  )
}

export default BDSTopContent