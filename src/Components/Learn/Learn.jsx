import React from 'react';
import { FaLaptopCode, FaChartLine, FaBullhorn, FaPaintBrush, FaArrowCircleRight } from 'react-icons/fa';

const Learn = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Browse Top Essential Career Courses</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="bg-gray-800 dark:bg-white shadow-md rounded-lg overflow-hidden w-64">
          <div className="flex justify-center items-center h-24 bg-gray-700 dark:bg-gray-300">
            <FaLaptopCode className="text-white dark:text-gray-800 text-5xl" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-white dark:text-gray-800">Web Development</h3>
            <p className="text-white dark:text-gray-800">Beginner Course.</p>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-white shadow-md rounded-lg overflow-hidden w-64">
          <div className="flex justify-center items-center h-24 bg-gray-700 dark:bg-gray-300">
            <FaChartLine className="text-white dark:text-gray-800 text-5xl" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-white dark:text-gray-800">Data Science</h3>
            <p className="text-white dark:text-gray-800">Beginner Course.</p>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-white shadow-md rounded-lg overflow-hidden w-64">
          <div className="flex justify-center items-center h-24 bg-gray-700 dark:bg-gray-300">
            <FaBullhorn className="text-white dark:text-gray-800 text-5xl" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-white dark:text-gray-800">Digital Marketing</h3>
            <p className="text-white dark:text-gray-800">Beginner Course.</p>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-white shadow-md rounded-lg overflow-hidden w-64">
          <div className="flex justify-center items-center h-24 bg-gray-700 dark:bg-gray-300">
            <FaPaintBrush className="text-white dark:text-gray-800 text-5xl" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-white dark:text-gray-800">Graphic Design</h3>
            <p className="text-white dark:text-gray-800">Beginner Course.</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <FaArrowCircleRight className="text-4xl text-orange-400 mb-4" />
          <p className="text-lg font-semibold text-orange-400">Browse All</p>
        </div>
      </div>
    </div>
  );
}

export default Learn;
