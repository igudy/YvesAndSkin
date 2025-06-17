import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration attempt submitted!');
  };

  return (
    <div className='container mx-auto py-6 '>
      <div className='mb-4'>
        <Link to='/' className="text-sm text-orange-500 font-bold">&larr; HomePage</Link>
      </div>

      <div className=" flex flex-col md:flex-row bg-gray-100 text-white p-16">
      <div
        className="hidden relative w-full md:w-[33%] bg-cover bg-center p-8 md:flex flex-col justify-end"
        style={{ backgroundImage: "url('/src/assets/makeup10.png')" }}
      >
        
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative md:bottom-30 z-10">
          <h1 className="md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4">
            We show your skin, hair, and body the care and attention they deserve.
          </h1>
          <p className="text-lg text-gray-300">
            Where Tranquility Meets Transformation.
          </p>
        </div>
      </div>

      
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-800">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Register</h2>
          <p className="text-gray-400 text-sm mb-8 text-center md:text-left">
            Welcome to Amytech Beauty Saloon, we hope your stay with us feel as bright as the morning sun.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 border border-orange-500 rounded-md text-white cursor-pointer placeholder-gray-400 focus:outline-none focus:border-gray-600"
                value={formData.email}
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
                className="w-full p-3 bg-gray-700 border border-orange-500 rounded-md text-white cursor-pointer placeholder-gray-400 focus:outline-none focus:border-gray-600"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-700 border border-orange-500 rounded-md text-white cursor-pointer placeholder-gray-400 focus:outline-none focus:border-gray-600"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-md cursor-pointer hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Don't have an account? <Link to='/LoginPage' className="text-orange-500 cursor-pointer font-bold hover:underline">Login</Link>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default RegisterPage;
