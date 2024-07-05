import React from 'react';
import { FaRegLightbulb, FaChalkboardTeacher, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const OnlineSteps = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="mb-8 lg:mb-0 lg:mr-8">
        <img src="/Images/College.png" alt="College" className="lg:w-[500px] lg:h-[500px]" />
      </div>
      <div className="text-center lg:text-left mb-12 lg:mb-0 w-full lg:w-2/3">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">How our Platform Works</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col items-center bg-white w-[250px] h-[250px] dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <FaRegLightbulb className="text-orange-400 text-3xl mb-2" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">1. Discover</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">Browse our extensive course catalog to find the perfect match for your interests and career goals.</p>
          </div>
          <div className="flex flex-col items-center bg-white w-[250px] h-[250px] dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <FaChalkboardTeacher className="text-orange-400 text-3xl mb-2" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">2. Enroll</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">Sign up for courses and gain access to high-quality learning materials, including videos, readings, and quizzes.</p>
          </div>
          <div className="flex flex-col items-center bg-white w-[250px] h-[250px] dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <FaLaptopCode className="text-orange-400 text-3xl mb-2" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">3. Learn</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">Engage with interactive content and participate in discussions with peers and instructors to enhance your understanding.</p>
          </div>
          <div className="flex flex-col items-center bg-white w-[250px] h-[250px] dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <FaUserGraduate className="text-orange-400 text-3xl mb-2" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">4. Achieve</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">Complete courses and earn certificates to showcase your new skills and knowledge to employers and peers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineSteps;
