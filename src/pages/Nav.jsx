import React, { useState } from "react";
import { Search, Briefcase, Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/icon.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [_, setIsServiceDropdownOpen] = useState(false);
  // const toggleServiceDropdown = () => setIsServiceDropdownOpen((prev) => !prev);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav
      className="bg-white/80 backdrop-blur-md shadow-sm
     px-4 py-4 fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-gray-800"
        >
          <img src={logo} alt="Logo" className="w-6 h-6" />
          <span>
            YVES<span className="text-orange-500">&</span>SKIN
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex items-center gap-8 
        text-sm font-medium text-gray-600"
        >
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          {/* <div className="relative">
            <button
              onClick={toggleServiceDropdown}
              className="flex items-center gap-1 hover:text-orange-500 transition"
            >
              Services <ChevronDown size={16} />
            </button>
            {isServiceDropdownOpen && (
              <div
                className="absolute left-0 top-10 bg-white shadow-md 
              rounded-md overflow-hidden z-50 w-36"
              >
                <Link
                  to="/ServicePage"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-800"
                  onClick={() => setIsServiceDropdownOpen(false)}
                >
                  SPA
                </Link>
                <Link
                  to="/MakeupPage"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-800"
                  onClick={() => setIsServiceDropdownOpen(false)}
                >
                  Makeup
                </Link>
              </div>
            )}
          </div> */}

          <Link to="/AboutPage" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link to="/ContactPage" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Search className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer" />
          <Briefcase className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer" /> */}
          <Link
            to="/LoginPage"
            className="bg-black text-white px-4 py-2 text-sm rounded-lg hover:bg-orange-500 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-orange-500"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className="md:hidden mt-4 space-y-2 bg-white rounded-md
         shadow-md py-4 px-4 transition-all duration-300"
        >
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-orange-500"
          >
            Home
          </Link>

          {/* <div>
            <button
              onClick={toggleServiceDropdown}
              className="w-full text-left flex cursor-pointer justify-between 
              items-center py-2 text-gray-700 hover:text-orange-500"
            >
              Services <ChevronDown size={18} />
            </button>
            {isServiceDropdownOpen && (
              <div className="pl-4 space-y-2 mt-1">
                <Link
                  to="/ServicePage"
                  className="block text-sm text-gray-600 hover:text-orange-500"
                >
                  SPA
                </Link>
                <Link
                  to="/MakeupPage"
                  className="block text-sm text-gray-600 hover:text-orange-500"
                >
                  Makeup
                </Link>
              </div>
            )}
          </div> */}

          <Link
            to="/AboutPage"
            className="block py-2 text-gray-700 hover:text-orange-500"
          >
            About
          </Link>
          <Link
            to="/ContactPage"
            className="block py-2 text-gray-700 hover:text-orange-500"
          >
            Contact
          </Link>

          <div className="pt-4 border-t">
            <Link
              to="/LoginPage"
              className="block w-full bg-black text-white text-center
               py-2 rounded-md hover:bg-orange-500 transition"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
