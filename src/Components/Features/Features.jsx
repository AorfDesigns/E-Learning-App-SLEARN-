import React from 'react';
import { FaBook, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Invest in your career with SLEARN</h2>
      <p className="mb-8 max-w-2xl">
        Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.
      </p>
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <FaBook className="text-4xl text-orange-500 mb-2" />
          <span>Learn Anything</span>
          <p>Explore any interest or trending topic, take prerequisites, and advance your skills</p>
        </div>
        <div className="flex flex-col items-center">
          <FaChalkboardTeacher className="text-4xl text-orange-500 mb-2" />
          <span>Flexible Learning</span>
          <p>Learn at your own pace, move between multiple courses, or switch to a different course</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCertificate className="text-4xl text-orange-500 mb-2" />
          <span>Unlimited Certificates</span>
          <p>Earn a certificate for every learning program that you complete at no additional cost</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
