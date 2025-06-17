// Header.js
import React from 'react';
import Button from './Button';

function MakeupHeader() {
    const handleClick = () => {
    
    };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-800">Everyday Makeup</h1>
      <Button className="px-6 py-2 bg-gray-900 text-gray-100 rounded-md hover:rounded-2xl hover:text-red-500 transition duration-500" display='Explore All' onClick={handleClick}/>
      
    </div>
  );
}

export default MakeupHeader;