import React from "react";
import { Link } from "react-router-dom";

function MakeupCard({ imageSrc, altText, title, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageSrc} alt={altText} className="w-full h-130 object-cover" />
      <div className="flex items-center justify-between ">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-900 font-semibold mt-1">{price}</p>
      </div>
      <Link to="/MakeupForm" className="text-orange-500 mt-4 inline-block">
        Book Now &rarr;
      </Link>
    </div>
  );
}

export default MakeupCard;
