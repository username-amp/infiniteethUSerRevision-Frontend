import React from 'react'
import SSTopContent from '../components/Services/SSTopContent'
import BDSDescription from '../components/Services/BDSDescription'
import SSChildrenDentistry from '../components/Services/SSChildrenDentistry'
import SSToothImplants from '../components/Services/SSToothImplants'
import SSToothCapping from '../components/Services/SSToothCapping'
import SSOrthodonticBraces from '../components/Services/SSOrthodonticBraces'
import SSRootCanalTherapy from '../components/Services/SSRootCanalTherapy'
import SSBleedingGums from '../components/Services/SSBleedingGums'
import SSTeethWhitening from '../components/Services/SSTeethWhitening'

const SpecializedServices = () => {
  return (
    <>
        <SSTopContent />
        <BDSDescription />
        <SSChildrenDentistry />
        <SSToothImplants />
        <SSToothCapping />
       <SSOrthodonticBraces />
       <SSRootCanalTherapy />
       <SSBleedingGums />
       <SSTeethWhitening />
    </>
  )
}

export default SpecializedServices