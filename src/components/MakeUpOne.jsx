import React from "react";
import make1 from "../assets/makeup1.jpg";
import make2 from "../assets/story2.png";

const MakeUpOne = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
        Services / Categories <span className="text-orange-500">(Makeup)</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[make2, make1].map((img, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={img}
              alt="Makeup"
              className="w-full h-80 md:h-[450px] object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left">
          The Place Of <span className="text-orange-500">Beauty</span>
        </h2>
        <p className="text-gray-800 text-lg max-w-2xl text-center md:text-left">
          Explore our makeup types, choose the one you like and follow the link
          to book. We'll be glad to have you.
        </p>
      </div>
    </div>
  );
};

export default MakeUpOne;
