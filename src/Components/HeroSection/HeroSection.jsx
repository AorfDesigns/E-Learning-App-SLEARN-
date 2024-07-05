import React from 'react';
import SearchComponent from '../SearchComponent/SearchComponent';

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/Images/Bg.png')" }}
    >
      <div className="text-white w-full h-full flex items-center justify-center">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold text-orange-400 dark:text-white mb-6">
              Learn Without Limits
            </h1>
            <p className="text-sm lg:text-xl text-white dark:text-gray-300 mb-6">
              Unlock your potential with our comprehensive and interactive learning platform. SLEARN is here to guide you every step of the way.
            </p>
           <div className='flex flex-col items-start mr-40'>
            <SearchComponent />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
