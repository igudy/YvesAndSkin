import React from 'react'
import Button from './Button';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import { MoveRight } from 'lucide-react';


function AboutTeam() {
    const handleClick = () => {
    
    };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto  flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Meet <span className='text-orange-500'>Our Team</span></h2>
            <p className="text-gray-600 max-w-lg">
                Life inside our beauty salon is never a dull moment, and the enthusiasm of wanting to satisfy our customers keeps all of us united.
            </p>
            </div>
            <Button className='px-6 py-3 border bg-black border-gray-400 text-white font-semibold rounded-md hover:rounded-2xl hover:text-orange-500 transition duration-500' display='Explore All Team'  onClick={handleClick} />
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">

            <div className="flex flex-col items-start text-center">
            <img src={team3} alt="Hair Salon Haven" className="w-full h-auto object-cover rounded-[8px] mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                James Ethan
            </h2>
            <p className='text-start w-auto'>
                James is the serene soul behind Serene Beauty's spa and wellness offerings. With a wealth of experience in esthetics and...
            </p>
            <Button
                className="text-orange-500 flex items-center gap-2 hover:cursor-pointer"
                display="Read More"
                showArrow={<MoveRight />}
                onClick={handleClick}
            />
            </div>

            <div className="flex flex-col items-start text-center">
            <img src={team2} alt="Hair Salon Haven" className="w-full h-auto object-cover rounded-[8px] mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                Cynthia Makafui
            </h2>
            <p className='text-start w-[80%]'>
                Cynthia is the visionary artist responsible for the salon's stunning makeup transformations. Her creativity knows...
            </p>
            <Button
                className="text-orange-500 flex items-center gap-2 hover:cursor-pointer"
                display="Read More"
                showArrow={<MoveRight />}
                onClick={handleClick}
            />
            </div>

            <div className="flex flex-col items-start text-center">
            <img src={team1} alt="Hair Salon Haven" className="w-full h-auto object-cover rounded-[8px] mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                Angela Goodwill
            </h2>
            <p className='text-start w-auto'>
                Angela is the nail guru who turns manicures and pedicures into works of art. Her meticulous attention to detail and...
            </p>
            <Button
                className="text-orange-500 flex items-center gap-2 hover:cursor-pointer"
                display="Read More"
                showArrow={<MoveRight />}
                onClick={handleClick}
            />
            </div>
      </div>
    </div>
  )
}

export default AboutTeam