import React from 'react'
import logo from '../assets/icon.png'


const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 md:py-16 mt-12 px-4 sm:px-6 mb-">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t pt-8 border-gray-200 ">

        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Brand</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Our Story</a></li>
            <li><a href="#" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Booking</a></li>
            <li><a href="#" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Exchange & Returns</a></li>
            <li><a href="#" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Instagram</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Youtube</a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">Pinterest</a></li>
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Get to know more about us and everything we do.</h3>
          <form className="space-y-3 mb-6">
            <input
              type="email"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:rounded-2xl hover:text-orange-500 hover:bg-gray-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>

          <div className="space-y-2 text-gray-700 text-sm">
            <p>reach@Amytechbeauty.com</p>
            <p>(+234) 8133 971 813 </p>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-4 mt-10 pt-6 pb-24 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

        <div className="flex mb-4 md:mb-0">
            <span className="text-lg font-bold text-gray-300">AMYTECH</span>
            <img src={logo} alt="" width={30}/>
            <span className="text-lg font-bold text-gray-300">BEAUTY</span>
        </div>

        <div>
            &copy;{new Date().getFullYear()} All rights reserved
        </div>
        <div>
          <p>Where <span className='text-orange-500'>Tranquility</span> Meets <span className='text-orange-500'>Transformation</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
