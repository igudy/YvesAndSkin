import React from 'react';
import image1 from '../assets/bag.png'; 
import image2 from '../assets/jew.png';
import { Link } from 'react-router-dom';

const Services = () => {
   

  return (
    <div className=" p-8">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Categories Section */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">By Categories</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Makeup</li>
            <li>Hair</li>
            <li>Skincare</li>
            <li>Waxing</li>
            <li>Spa</li>
          </ul>
        </div>

        {/* Collections Section */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">By Collections</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Phones & Bags</li>
            <li>J&B Jewelries</li>
            <li>Doris C. Haven</li>
            <li>Ama Clothing Shop</li>
            <li>Judith's Hairline</li>
          </ul>
        </div>

        {/* Product Images Section */}
        <div className="flex space-x-4">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={image1}
              alt="Shop Phones and Bags"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-50 bg-opacity-30 flex items-center justify-center">
              <span className="text-black text-2xl font-bold">Shop Phne <span className='text-white'> Bags</span></span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={image2}
              alt="J&B Jewelries"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">J&B Jewelries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <div className="flex justify-center mt-8">
        <Link to='/MakeupForm' className='bg-black hover:text-orange-500 text-white px-8 py-3 rounded-md hover:rounded-2xl hover:cursor-pointer transition duration-500'>Book Now</Link>
        
      </div>
    </div>
  );
};

export default Services;
