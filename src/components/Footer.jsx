import React from "react";
import logo from "../assets/icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-10 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t pt-8 border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Brand</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">
            Support
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Booking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Terms
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">
            Connect
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Stay Updated
          </h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md"
            />
            <button className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-6 h-6" />
          <span className="text-lg font-bold">YVES AND SKIN</span>
        </div>
        <div>&copy; {new Date().getFullYear()} All rights reserved</div>
        <div>
          Where <span className="text-orange-500">Tranquility</span> Meets{" "}
          <span className="text-orange-500">Transformation</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
