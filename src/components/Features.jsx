import React from 'react';
import Button from './Button'; 
import { MoveRight } from 'lucide-react';
import logo from '../assets/icon.png';
import image1 from '../assets/bag.png'; 
import image2 from '../assets/haven.png';
import image3 from '../assets/jew.png';
import vid from '../assets/vid.png'; 
import you from '../assets/Youtube.png';

function Features() {
    const handleClick = () => {
    
    };
  

  return (
    <div className="container mx-auto px-4 lg:px-0 sm:px-6 py-8 ">

      <div className=" flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12">
        <h3 className="text-4xl sm:text-5xl md:text-5xl font-bold text-black leading-tight mb-6 md:mb-0">
          Featured
        </h3>
        <Button
          className="px-6 py-3 border bg-black border-gray-400 text-white font-semibold rounded-md hover:rounded-2xl hover:text-orange-500 transition duration-500"
          display="Explore Collections"
          onClick={handleClick}
        />
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

        <div className="relative group overflow-hidden rounded-[8px] shadow-lg">

          <img src={image1} alt="Featured item 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 p-4 xl:p-2.5 xl:mx-30 bg-white bg-opacity-90 text-center text-gray-800 transition-opacity duration-300">
            <h2 className="text-base sm:text-lg font-bold mb-2">
              Hair Salon Haven
            </h2>
            <Button
              className="text-orange-500 flex items-center justify-center gap-1 hover:cursor-pointer w-full"
              display="Explore Services"
              showArrow={<MoveRight />}
              onClick={handleClick}
            />
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-[8px] shadow-lg">
          <img src={image2} alt="Featured item 2" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 p-4 xl:p-2 xl:mx-30 bg-white bg-opacity-90 text-center text-gray-800 transition-opacity duration-300">
            <h2 className="text-base sm:text-lg font-bold mb-2">
              Waxing Salon Haven
            </h2>
            <Button
              className="text-orange-500 flex items-center justify-center gap-1 hover:cursor-pointer w-full"
              display="Explore Services"
              showArrow={<MoveRight />}
              onClick={handleClick}
            />
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-[8px] shadow-lg">
          <img src={image3} alt="Featured item 3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 p-4 xl:p-2 xl:mx-30 bg-white bg-opacity-90 text-center text-gray-800 transition-opacity duration-300">
            <h2 className="text-base sm:text-lg font-bold mb-2">
              Skincare Salon Haven
            </h2>
            <Button
              className="text-orange-500 flex items-center justify-center gap-1 hover:cursor-pointer w-full"
              display="Explore Services"
              showArrow={<MoveRight />}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>

      <div className=" relative rounded-lg overflow-hidden shadow-2xl">
        <img
          src={vid}
          alt=""
          className="w-full h-auto object-cover max-h-[70vh] md:max-h-[80vh]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4 bg-opacity-40 text-white">
          <div>
            <img src={you} alt="YouTube icon" className="w-16 sm:w-20 md:w-24 h-auto" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold text-gray-200">AMYTECH</span>
            <img src={logo} alt="Amytech Beauty logo" className="w-8 sm:w-10 h-auto" />
            <span className="text-xl sm:text-2xl font-bold text-gray-200">BEAUTY</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Features;