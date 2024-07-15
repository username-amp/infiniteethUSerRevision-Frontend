import React from 'react';
import toothFillings from '../../shared/components/Partials/assets/toothfillings.jpg';

const BDSToothFillings = () => {
  return (
    <div className="w-full p-16 mb-10">
      <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
        <div className="flex flex-col items-start ">
          <h1 className="text-3xl font-bold text-orange-500 mb-9">Tooth Fillings</h1>
          <img src={toothFillings} alt="Tooth Fillings" className="w-96" />
        </div>
        <div className="text-center md:text-left mt-16">
          <p className="font-sans text-base text-customGray mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus <br /> id
            eveniet velit architecto. Voluptate facilis itaque assumenda velit <br /> qui
            asperiores cum, modi aspernatur quaerat, odio natus minus, <br /> magnam
            sapiente obcaecati?
          </p>
          <button className="px-16 py-3 bg-basicButtonColor text-white rounded-full font-semibold text-xl mt-3 ">GET THIS SERVICE</button>
        </div>
      </div>
    </div>
  );
}

export default BDSToothFillings;
