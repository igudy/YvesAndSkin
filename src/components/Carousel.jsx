import React, { useState } from 'react';
import image1 from '../assets/Image Slide.png'
import vid from '../assets/vid.png'
import image3 from '../assets/Image Slide.png'
import image4 from '../assets/vid.png'

const images = [
  { id: 1, src: image1, alt: 'Elegant woman with jewelry looking upwards' },
  { id: 2, src: vid, alt: 'Placeholder image 2' },
  { id: 3, src: image3, alt: 'Placeholder image 3' },
  { id: 4, src: image4, alt: 'Placeholder image 3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative container mx-auto px-4 lg:px-6 my-15  overflow-hidden rounded-lg shadow-xl">

      <div className=" min-h-screen">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`absolute top-0 left-0 w-full min-h-screen object-cover transition-opacity duration-500
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>


      {/* Pagination Dots */}

      <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 flex space-x-3.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300
              ${index === currentIndex ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
