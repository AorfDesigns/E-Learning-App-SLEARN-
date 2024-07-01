import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-12">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-orange-400 dark:text-white mb-6">
            Learn Without Limits
          </h1>
          <p className="text-sm lg:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Unlock your potential with our comprehensive and interactive learning platform. Whether you're looking to advance your career, learn a new skill, or explore new interests, SLEARN is here to guide you every step of the way.
          </p>
          <button className="bg-orange-400 text-gray-800  w-64 outline-none py-2 px-4 rounded-full hover:bg-transparent border-[2px] border-orange-400   transition duration-300">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 lg:pl-12 mb-12 lg:mb-0">
          <img
            src="./Images/Account.jpg"
            alt="Learning illustration"
            className="w-full rounded-full shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
