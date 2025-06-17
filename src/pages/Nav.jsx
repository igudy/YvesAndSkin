import React, { useState } from 'react';
import { Search, Briefcase, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/icon.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <nav className=" bg-white px-4 py-4 fixed top-0 right-0 left-0 z-1">
      <div className="container mx-auto flex items-center justify-between md:justify-between">
        <div className="flex items-center">
          <span className="md:text-[16px] text-[13px] font-bold text-gray-800">AMYTECH</span>
          <img src={logo} alt="Amytech Beauty logo"width={15} md:width={30} className="mx-1" />
          <span className="md:text-[16px] text-[13px] font-bold text-orange-500">BEAUTY</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-orange-500 font-bold hover:bg-gray-800 transition duration-300 ease-in-out hover:rounded-2xl hover:cursor-pointer px-2 py-1 rounded-md">Home</Link>

          <div className="relative">
          <button
            onClick={toggleServiceDropdown}
            className="text-gray-600 hover:text-orange-500 font-bold hover:bg-gray-800 transition duration-300 ease-in-out hover:rounded-2xl hover:cursor-pointer px-2 py-1 rounded-md flex items-center"
          >
            Service
            <ChevronDown className='p-1 pt-2'/>
          </button>
          {isServiceDropdownOpen && (
            <div className="absolute left-0 mt-2 w-20">
              <Link
                to="/ServicePage"
                className="block text-orange-500 bg-gray-900 hover:text-gray-600 font-bold hover:bg-gray-100 transition duration-300 ease-in-out hover:rounded-2xl hover:cursor-pointer px-2 py-1 mb-2 rounded-md"
                onClick={() => setIsServiceDropdownOpen(false)}
              >
                SPA
              </Link>
              
              <Link
                to="/MakeupPage"
                className="block text-orange-500 bg-gray-900 hover:text-gray-600 font-bold hover:bg-gray-100 transition duration-300 ease-in-out hover:rounded-2xl hover:cursor-pointer px-2 py-1 rounded-md"
                onClick={() => setIsServiceDropdownOpen(false)}
              >
                Makeup
              </Link>
             
            </div>
          )}
        </div>

          
          <Link to='/AboutPage' className="text-gray-600 hover:text-orange-500 font-bold hover:bg-gray-800 transition duration-300 ease-in-out hover:rounded-2xl hover:cursor-pointer px-2 py-1 rounded-md">About Us</Link>
          <Link to='/ContactPage' className="text-gray-600 hover:text-orange-500 font-bold hover:bg-gray-800 transition duration-300 ease-in-out hover:rounded-2xl hover:cursor-pointer px-2 py-1 rounded-md">Contact Us</Link>
        </div>

        
        <div className='flex items-center space-x-6'>
          <button className='hover:cursor-pointer text-gray-600 hover:text-orange-500 transition-colors duration-300'>
            <Search size={20} />
          </button>
          <button className='hover:cursor-pointer text-gray-600 hover:text-orange-500 transition-colors duration-300'>
            <Briefcase size={20} />
          </button>
          <button className='text-white hover:text-orange-500 font-bold transition-colors duration-500 bg-black hover:rounded-2xl hover:cursor-pointer px-4 py-2 rounded-md'>
          <Link to='/LoginPage'>Login</Link>
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-orange-500 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* media screen */}

      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg py-4`}>
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="block text-gray-600 hover:text-orange-500 font-bold hover:bg-gray-100 w-full text-center pr-6 py-2 rounded-md transition duration-300 ease-in-out hover:rounded-2xl">Home</Link>


          <div className="relative w-full">
          <button
            onClick={toggleServiceDropdown}
            className="text-gray-600 hover:text-orange-500 font-bold hover:bg-gray-100 w-full text-center transition duration-300 ease-in-out hover:rounded-2xl hover:cursor-pointer px-2 py-2 rounded-md flex items-center justify-center"
          >
            Service
            <ChevronDown className='p-1 pt-2'/>
          </button>
          {isServiceDropdownOpen && (
            <div className="absolute left-25 mt-2 w-20 ">
              <Link
                to="/ServicePage"
                className="block text-orange-500 bg-gray-900 hover:text-gray-600 font-bold hover:bg-gray-100 transition duration-300 ease-in-out hover:rounded-2xl hover:cursor-pointer px-2 py-1 mb-2 rounded-md "
                onClick={() => setIsServiceDropdownOpen(false)}
              >
                SPA
              </Link>
              
              <Link
                to="/MakeupPage"
                className="block text-orange-500 bg-gray-900 hover:text-gray-600 font-bold hover:bg-gray-100 transition duration-300 ease-in-out hover:rounded-2xl hover:cursor-pointer px-2 py-1 rounded-md"
                onClick={() => setIsServiceDropdownOpen(false)}
              >
                Makeup
              </Link>
             
            </div>
          )}
        </div>

          <Link to='/AboutPage' className="block text-gray-600 hover:text-orange-500 font-bold hover:bg-gray-100 w-full text-center py-2 rounded-md transition duration-300 ease-in-out hover:rounded-2xl">About Us</Link>
          <Link to="/ContactPage" className="block text-gray-600 hover:text-orange-500 font-bold hover:bg-gray-100 w-full text-center py-2 rounded-md transition duration-300 ease-in-out hover:rounded-2xl">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
