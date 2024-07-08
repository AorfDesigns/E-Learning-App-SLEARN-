import React from 'react';

const AboutStats = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-[32px] font-bold text-gray-800 dark:text-white mb-8">
          Our Achievements
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Students Graduated
            </h3>
            <p className="text-4xl font-bold text-orange-400">
              10,000+
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Students Enrolled
            </h3>
            <p className="text-4xl font-bold text-orange-400">
              50,000+
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Registered Users
            </h3>
            <p className="text-4xl font-bold text-orange-400">
              100,000+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
