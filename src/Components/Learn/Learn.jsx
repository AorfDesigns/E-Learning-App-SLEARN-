import React from 'react';

// Import images (replace with actual image URLs or use placeholders)
// import webDevelopmentImg from './images/web-development.jpg';
// import dataScienceImg from './images/data-science.jpg';
// import digitalMarketingImg from './images/digital-marketing.jpg';
// import graphicDesignImg from './images/graphic-design.jpg';

const Learn = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold mb-8 text-center">See What You Can Learn with SLEARN</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-gray-800 dark:bg-white shadow-md rounded-lg overflow-hidden">
          <img src="" alt="Web Development" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-800">Web Development</h3>
            <p className="text-white dark:text-gray-800">Begineer Course.</p>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-white text-white shadow-md rounded-lg overflow-hidden">
          <img src="" alt="Data Science" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-800">Data Science</h3>
            <p className="text-white dark:text-gray-800">Begineer Course</p>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-white text-whiteshadow-md rounded-lg overflow-hidden">
          <img src="" alt="Digital Marketing" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-800">Digital Marketing</h3>
            <p className="text-white dark:text-gray-800">Begineer Course.</p>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-white text-white shadow-md rounded-lg overflow-hidden">
          <img src="" alt="Graphic Design" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-800">Graphic Design</h3>
            <p className="text-white dark:text-gray-800">Begineer Course.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;

