import React from 'react';
import MakeupCard from './MakeupCard';
import MakeupHeader from './MakeupHeader';
import make3 from '../assets/makeup2.png'
import make4 from '../assets/makeup3.png'
import make5 from '../assets/makeup4.png'
import make6 from '../assets/makeup5.png'
import make7 from '../assets/makeup6.png'
import make8 from '../assets/makeup7.png'
import make9 from '../assets/makeup8.png'
import make10 from '../assets/makeup9.png'
import make11 from '../assets/makeup10.png'
import make12 from '../assets/makeup11.png'
import make13 from '../assets/makeup12.png'
import make14 from '../assets/makeup13.png'

function App() {
  return (
    <div className="container mx-auto px-4 lg:px-0 sm:px-6">
        <div className='mb-10'>
            <MakeupHeader />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <MakeupCard
                imageSrc={make3}
                altText=""
                title="No-Makeup Makeup"
                price="$30"
                className="font-bold text-3xl"
            />
            <MakeupCard
                imageSrc={make4}
                altText=""
                title="Minimalist Makeup"
                price="$40"
            />
            <MakeupCard
                imageSrc={make5}
                altText=""
                title="Office Makeup"
                price="$50"
            />
            </div>
        </div>

        <div className='mb-10'>
            <MakeupHeader />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"> 
            <MakeupCard
                imageSrc={make6}
                altText=""
                title="Romantic Bridal"
                price="$80"
                className="font-bold text-3xl"
            />
            <MakeupCard
                imageSrc={make7}
                altText=""
                title="Glamorous Bridal"
                price="$90"
            />
            <MakeupCard
                imageSrc={make8}
                altText=""
                title="Vintage Bridal"
                price="$80"
            />
            </div>
        </div>

        <div className='mb-10'>
            <MakeupHeader />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <MakeupCard
                imageSrc={make9}
                altText=""
                title="Party Makeup"
                price="$60"
                className="font-bold text-3xl"
            />
            <MakeupCard
                imageSrc={make10}
                altText=""
                title="Halloween Makeup"
                price="$80"
            />
            <MakeupCard
                imageSrc={make11}
                altText=""
                title="Anniversary Makeup"
                price="$50"
            />
            </div>
        </div>

        <div>
            <MakeupHeader />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <MakeupCard
                imageSrc={make12}
                altText=""
                title="Clown Makeup"
                price="$100"
                className="font-bold text-3xl"
            />
            <MakeupCard
                imageSrc={make13}
                altText=""
                title="Old Age Makeup"
                price="$160"
            />
            <MakeupCard
                imageSrc={make14}
                altText=""
                title="Character Makeup"
                price="$180"
            />
            </div>
        </div>
    </div>
  );
}

export default App;