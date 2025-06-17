import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function BookForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    makeupType: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked!!!');
  };

  return (
    <div className="container mx-auto bg-gray-900 flex items-center justify-center py-16 rounded-lg mb-16 lg:mb-0"
    style={{ backgroundImage: "url('/src/assets/back.png')" }}
    >
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-white text-3xl font-bold mb-2 text-center">Makeup Appointment Form</h2>
        <p className="text-gray-400 text-sm mb-8 text-center">
          Please fill the form below, it will only take 3 minutes
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 border border-orange-500 rounded-md text-gray-400 appearance-none placeholder-gray-400 focus:outline-none focus:border-gray-600"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 border border-orange-500 rounded-md text-gray-400 appearance-none placeholder-gray-400 focus:outline-none focus:border-ray-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="w-full p-3 bg-gray-700 border border-orange-500 rounded-md text-gray-400 appearance-none placeholder-gray-400 focus:outline-none focus:border-gray-600"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Select Makeup Type */}
          <div>
            <label htmlFor="makeupType" className="sr-only">Select Your Makeup Type</label>
            <div className="relative">
              <select
                id="makeupType"
                name="makeupType"
                className="w-full p-3 bg-gray-700 border border-orange-500 rounded-md text-gray-400 appearance-none pr-8 focus:outline-none focus:border-gray-600"
                value={formData.makeupType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Your Makeup Type</option>
                <option value="natural">Natural Makeup</option>
                <option value="glam">Glam Makeup</option>
                <option value="bridal">Bridal Makeup</option>
                <option value="other">Other</option>
              </select>
              <div className=" absolute bottom-3 right-0 flex items-center px-2 text-gray-400">
                <ChevronDown className='p-1'/>
              </div>
            </div>
          </div>

          {/* Choose Date */}
          <div>
            <label htmlFor="date" className="sr-only">Choose Your Date</label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Choose Your Date"
              className="w-full p-3 bg-gray-700 border border-orange-500 rounded-md text-gray-400 placeholder-gray-400 focus:outline-none focus:border-gray-600"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Choose Time */}
          <div>
            <label htmlFor="time" className="sr-only">Choose Your Time</label>
            <div className="relative">
              <select
                id="time"
                name="time"
                className="w-full p-3 bg-gray-700 border border-orange-500 rounded-md text-gray-400 appearance-none pr-8 focus:outline-none focus:border-gray-600"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Choose Your Time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <ChevronDown className='p-1'/>
              </div>
            </div>
          </div>

          {/* Any Notes For Us */}
          <div className="md:col-span-2">
            <label htmlFor="notes" className="sr-only">Any Notes For Us</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Any Notes For Us"
              rows="4"
              className="w-full p-3 bg-gray-700 border border-orange-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Book Now Button */}
          <div className="md:col-span-2 flex justify-start">
            <button
              type="submit"
              className="px-8 py-3 bg-gray-100 text-gray-900 font-semibold border-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
