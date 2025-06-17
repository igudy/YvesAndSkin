import React from 'react';
import story1 from '../assets/story1.png'; 
import story2 from '../assets/story2.png'; 
import story3 from '../assets/story3.png'; 


const AboutStory = () => {
  return (
    <section className=" py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our <span className="text-orange-500">Story</span>
        </h2>

        <div className="text-gray-700 leading-relaxed text-lg mb-12">
          <p className="mb-4">
            Since 2012 in a charming Hawaii Town, Serene Beauty emerged as a haven for beauty and tranquility.
            Founded by Sarah, a passionate hairstylist, the salon's simple yet profound vision was to enhance natural
            beauty while providing a peaceful escape.
          </p>
          <p>
            With time, Serene Beauty's dedicated team grew, offering a range of services from esthetics to makeup. It
            became a beloved part of the community, known for its serene ambiance and commitment to giving back
            through charity events.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={story1}
              alt="Client getting hair washed"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={story2}
              alt="Makeup application"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={story3}
              alt="Happy client and stylist"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
