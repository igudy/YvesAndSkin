import React from 'react';
import { Mail, Phone } from 'lucide-react';
import branch1 from '../assets/branch1.png';
import branch2 from '../assets/branch2.png';


const ContactBranch = () => {
  return (
    <div className="container px-4 sm:px-6 mx-auto w-full py-12 lg:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Come And Visit <span className="text-orange-500">Our Other Branches</span>
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          
          <div className="p-6 flex flex-col justify-between">
            <div className='md:mt-18'>
              <h3 className="text-xl font-semibold text-gray-900">Lekki, Nigeria</h3>
              <p className="mt-2 text-gray-600">43W Elgin St. Celina, Delaware 10299</p>
              <div className="mt-4 text-gray-700 space-y-2">
                <div className="flex items-center gap-1">
                  <Mail className='p-1 text-orange-500'/>
                  <span>Amytechbeauty.com.ng</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className='p-1 text-orange-500'/>
                  <span>(+234) 8133-971-813</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex-shrink-0">
            <img
              className="h-full w-full object-cover md:w-full"
              src={branch2}
              alt="Lekki Branch Interior"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          
          <div className="p-6 flex flex-col justify-between">
            <div className='md:mt-18'>
              <h3 className="text-xl font-semibold text-gray-900">Kumasi, Ghana</h3>
              <p className="mt-2 text-gray-600">Riverside 25, San Francisco California</p>
              <div className="mt-4 text-gray-700 space-y-2">
                <div className="flex items-center gap-1">
                <Mail className='p-1 text-orange-500'/>
                  <span>Amytechbeauty.com.gh</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className='p-1 text-orange-500'/>
                  <span>(+234) 813-397-1813</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex-shrink-0">
            <img
              className="h-full w-full object-cover md:w-full"
              src={branch1}
              alt="Kumasi Branch Interior"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBranch;
