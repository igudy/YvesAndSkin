import React from 'react';
import { Link } from 'react-router-dom';


function Header() {


  return (
    <div className=" max-auto mt-12 bg-white flex flex-col items-center justify-center font-sans text-gray-800">

      <p className="text-sm md:text-base mb-4 tracking-wide">
        Where Tranquility Meets Transformation.
      </p>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-8 max-w-4xl px-4">
        We show your <span className="text-orange-500">skin</span>, <span className="text-orange-500">hair</span>, and <span className="text-orange-500">body</span> the care and attention they deserve.
      </h1>

      <Link to='/MakeupForm' className="bg-black text-white px-8 py-3 rounded-md hover:rounded-2xl text-lg font-semibold hover:text-orange-500 hover:bg-gray-800 transition duration-300 ease-in-out shadow-lg">Book Now</Link>

    </div>
  );
};


export default Header;