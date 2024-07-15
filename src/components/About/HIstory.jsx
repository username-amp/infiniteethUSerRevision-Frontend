import React from 'react';
import history from '../../shared/components/Partials/assets/history.jpg';

const HIstory = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center p-4 md:p-16 gap-8">
      <div className="flex justify-center md:w-auto">
        <img src={history} alt="" className="w-full max-w-xs md:max-w-md" />
      </div>

      <div>
        <h1 className="font-bold text-3xl md:text-5xl mb-5 text-orange-500 text-center md:text-left">History</h1>
        <div className="mb-5 text-gray-600 text-center md:text-left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda <br />ducimus laudantium saepe voluptate veritatis facilis cumque <br />
          placeat asperiores. Fugiat quasi eos eveniet voluptatem possimus <br /> incidunt blanditiis odio, consequatur illo alias?</p>
        </div>

        <div className="text-gray-600 text-center md:text-left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda <br />ducimus laudantium saepe voluptate veritatis facilis cumque <br />
          placeat asperiores. Fugiat quasi eos eveniet voluptatem possimus <br /> incidunt blanditiis odio, consequatur illo alias?</p>
        </div>
      </div>
    </div>
  );
}

export default HIstory;
