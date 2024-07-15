import React from 'react'
import BDSTopContent from '../components/Services/BDSTopContent'
import BDSDescription from '../components/Services/BDSDescription'
import BDSToothFillings from '../components/Services/BDSToothFillings'
import BDSToothExtraction from '../components/Services/BDSToothExtraction'
import BDSTeethCLeaning from '../components/Services/BDSTeethCLeaning'
import BDSToothXray from '../components/Services/BDSToothXray'


const BasicDentalServices = () => {
  return (
    <>
        <BDSTopContent />
        <BDSDescription />
        <BDSToothFillings />
        <BDSToothExtraction />
        <BDSTeethCLeaning />
        <BDSToothXray />
    </>
  )
}

export default BasicDentalServices