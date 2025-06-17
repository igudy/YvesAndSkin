import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, ArrowLeft } from 'lucide-react'
import couple from '../assets/couples.png';



const testimonialsData = [
  {
    id: 1,
    name: 'Daphne Augustine',
    title: 'Accra | Beautician',
    quote: [
      "Serene Beauty isn't just any other salon. It's  a complete cut above the rest. Every visit is always a treat and you're always made to feel special.",


      "Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",
    ],
  },
  {
    id: 2,
    name: 'Charles Div',
    title: 'Lagos | Customer',
    quote: [
      "Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",


      "Serene Beauty isn't just any other salon. It's  a complete cut above the rest. Every visit is always a treat and you're always made to feel special.",

    ],
  },
  {
    id: 3,
    name: 'Stephen Lucas',
    title: 'Abuja | Stylist',
    quote: [
      "Serene Beauty isn't just any other salon. It's  a complete cut above the rest. Every visit is always a treat and you're always made to feel special.",


      "Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",
    ],
  },
  {
    id: 4,
    name: 'Amiable Smith',
    title: 'Texas | Vendor',
    quote: [
      "Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",


      "Serene Beauty isn't just any other salon. It's  a complete cut above the rest. Every visit is always a treat and you're always made to feel special.",

    ],
  },
  {
    id: 5,
    name: 'Austin Miller',
    title: 'Toronto | Stylist',
    quote: [
      "Serene Beauty isn't just any other salon. It's  a complete cut above the rest. Every visit is always a treat and you're always made to feel special.",


      "Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",
    ],
  },
];





const Story = () => {

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
    const totalTestimonials = testimonialsData.length;
    const currentTestimonial = testimonialsData[currentTestimonialIndex];
  
    const goToPreviousTestimonial = () => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
      );
    };
  
    const goToNextTestimonial = () => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1
      );
    };
  
    
    const handleClick = () => {
        
    }

  return (
    <div className="container mx-auto px-4 lg:px-0 py-8 md:py-16">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Our <span className='text-orange-500'>Story</span></h2>
          <p className="text-gray-600 max-w-lg">
            Life inside our beauty salon is never a dull moment, and the enthusiasm of wanting to satisfy our customers keeps all of us united.
          </p>
        </div>
        <Button className='px-6 py-3 border bg-black border-gray-400 text-white font-semibold rounded-md hover:rounded-2xl hover:text-orange-500 transition duration-500' display='All Our Stories'  onClick={handleClick} />

      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">

        <div className="lg:w-1/2 relative flex justify-center items-center">
          <img
            src={couple}
            alt="Couple embracing, representing 'our story'"
            className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[500px] lg:max-h-full"
          />
          
        </div>


        <div className="lg:w-1/2 flex flex-col justify-between p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
              TESTIMONIALS
            </h2>
    
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                {currentTestimonial.name}
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                {currentTestimonial.title}
              </p>
    
              <blockquote className="text-gray-700 leading-relaxed text-base md:text-lg lg:w-[30rem]">
                {currentTestimonial.quote.map((paragraph, index) => (
                  <p key={index} className={index < currentTestimonial.quote.length - 1 ? 'mb-8' : ''}>
                    "{paragraph}"
                  </p>
                ))}
              </blockquote>
            </div>
    
            <div className="flex justify-start items-center mt-60">
              <button
                onClick={goToPreviousTestimonial}
                className="flex items-center text-gray-600 hover:text-gray-800 hover:cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentTestimonialIndex === 0}
              >
                <ArrowLeft className=' rounded-full bg-gray-100 border hover:bg-gray-200 transition-colors duration-200 mr-2'/>
                <span className="text-sm">
                  {String(currentTestimonialIndex + 1).padStart(2, '0')} / {String(totalTestimonials).padStart(2, '0')}
                </span>
              </button>
              <button
                onClick={goToNextTestimonial}
                className="flex items-center rounded-full hover:cursor-pointer bg-gray-100 border hover:bg-gray-200 transition-colors duration-200 ml-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentTestimonialIndex === totalTestimonials - 1}
              >
                {/* <span className="sr-only"></span> */}
                <span className="text-gray-700 text-sm"></span>
                <ArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;


