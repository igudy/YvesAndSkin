import React from 'react';
import Button from './Button';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import { MoveRight } from 'lucide-react';

function HeroSection() {
  const handleClick = () => {
    
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12">

        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 md:mb-0 max-w-full md:max-w-[50%]">
          Enhance your inner radiance <br />
          at our <span className="text-orange-500">beauty sanctuary</span> and <br />
          let your true beauty shine.
        </p>
        <Button
          className="px-6 py-3 border bg-black border-gray-400 text-white font-semibold rounded-md hover:rounded-2xl hover:text-red-500 transition duration-500"
          display="Explore Services"
          onClick={handleClick}
        />
      </div>

      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

        <div className="flex flex-col items-start text-center">
          <img src={image1} alt="Hair Salon Haven" className="w-full h-auto object-cover rounded-[8px] mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Hair Salon Haven
          </h2>
          <Button
            className="text-orange-500 flex items-center gap-2 hover:cursor-pointer"
            display="Explore Services"
            showArrow={<MoveRight />}
            onClick={handleClick}
          />
        </div>

        <div className="flex flex-col items-start text-center">
          <img src={image2} alt="Waxing Salon Haven" className="w-full h-auto object-cover rounded-[8px] mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Waxing Salon Haven
          </h2>
          <Button
            className="text-orange-500 flex items-center gap-2 hover:cursor-pointer"
            display="Explore Services"
            showArrow={<MoveRight />}
            onClick={handleClick}
          />
        </div>

        <div className="flex flex-col items-start text-center">
          <img src={image3} alt="Skincare Salon Haven" className="w-full h-auto object-cover rounded-[8px] mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Skincare Salon Haven
          </h2>
          <Button
            className="text-orange-500 flex items-center gap-2 hover:cursor-pointer"
            display="Explore Services"
            showArrow={<MoveRight />}
            onClick={handleClick}
          />
        </div>
      </div>

      
      <div className='container mx-auto md:flex items-center justify-center md:max-auto md:space-x-10'>
          <div className='pb-8 md:pb-0'>
              <img src={image1} alt='' className='w-[635px] rounded-[8px] '/>
          </div>
          <div>
              <img src={image2} alt='' className='w-[635px] object-cover rounded-[8px]'/>
          </div>
      </div>


      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center text-center md:text-left mt-12 mb-8 md:space-x-24"> 

        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-0'>
          The Place Of <span className='text-orange-500'>Beauty</span>
        </h2>

        <p className='text-lg max-w-full md:max-w-[48%]'>
          Our heart goes out at what to we do and our slogan is making our customers feel beautiful and fabulous.
        </p>
      </div>

    </div>
  );
}

export default HeroSection;






