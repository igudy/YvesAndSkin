import React from 'react';
import make1 from '../assets/makeup1.jpg'
import make2 from '../assets/story2.png'

const MakeUpOne = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 sm:px-6 py-8">
      
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-700">Services / Categories <span className='text-orange-500'>(Makeup)</span></h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 h-[450px]">
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={make2}
            alt="Makeup application"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={make1}
            alt="Makeup products on a table"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">The Place Of <span className='text-orange-500'>Beauty</span></h2>
        </div>

        <div>
          <p className="text-gray-900 font-semibold">
            Explore our makeup types, choose the one you like and follow the link to book, we'll be glad to have you.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default MakeUpOne;
