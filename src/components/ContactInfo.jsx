import React from 'react';
import { MapPin, Mail, Phone, Instagram, Youtube, Twitter, MessageCircleHeart } from 'lucide-react';


const ContactInfo = () => {
  return (
    <div className="mt-4 flex items-center justify-center p-4">
      <div className="container mx-auto shadow-lg rounded-lg p-8 w-full  grid md:grid-cols-2 gap-8">

        <div className="p-8 bg-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to us for appointments, inquiries, or to experience the tranquility of
            Serene Beauty. We're here to make your beauty journey as serene as possible.
          </p>

          <div className="space-y-8 text-gray-700">
            <div className="flex items-start gap-2">
            <MapPin className='border-orange-500 rounded-full border p-1' />
              <span>1901 Thornridge Cir. Shiloh, Hawaii 81063, USA</span>
            </div>
            <div className="flex items-center gap-2">
            <Mail className='border-orange-500 rounded-full border p-1' />
              <span>@Amytechbeauty.com</span>
            </div>
            <div className="flex items-center gap-2">
            <Phone className='border-orange-500 rounded-full border p-1' />
              <span>(+234) 0813-397-1813</span>
            </div>
          </div>

          <div className="flex space-x-8 mt-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 border-orange-500 rounded-full border p-1">
            <Instagram className='p-1' />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 border-orange-500 rounded-full border p-1">
            <Youtube className='p-1' />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 border-orange-500 rounded-full border p-1">
            <Twitter className='p-1' />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 border-orange-500 rounded-full border p-1">
            <MessageCircleHeart className='p-1' />
            </a>
          </div>
        </div>

        <div className='md:w-full w-[90%]'>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Have a Question?</h2>
          <p className="text-gray-500 text-sm mb-4">
            <span className='text-orange-500'>Business Hours:</span> <span className='text-gray-900 font-bold'>Mon - Fri:</span> 08:00 AM To 09:00 PM <span className='text-gray-900 font-bold'>Sat:</span> 09:00 AM To 06:00 PM
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-orange-500 rounded-md hover:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-3 border border-orange-500 rounded-md hover:border-gray-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div>
                <label htmlFor="service" className="sr-only">What Service You Want?</label>
                <input
                  type="text"
                  id="service"
                  placeholder="What Service You Want?"
                  className="w-full p-3 border border-orange-500 rounded-md hover:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  className="w-full p-3 border border-orange-500 rounded-md hover:border-gray-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Message"
                className="w-full p-3 rounded-md border border-orange-500 hover:border-gray-600 resize-y"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-1/2 bg-slate-700 text-white p-3 rounded-md font-semibold hover:bg-slate-800 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
