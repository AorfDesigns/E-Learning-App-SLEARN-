import React from 'react';
import { FaBook, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Invest in your career with SLEARN</h2>
      <p className="mb-8 max-w-2xl">
        Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.
      </p>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        <div className="flex flex-col items-center max-w-xs">
          <FaBook className="text-4xl text-orange-500 mb-2" />
          <span className="font-semibold">Learn Anything</span>
          <p className="text-sm text-center">Explore any interest or trending topic, take prerequisites, and advance your skills</p>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <FaChalkboardTeacher className="text-4xl text-orange-500 mb-2" />
          <span className="font-semibold">Flexible Learning</span>
          <p className="text-sm text-center">Learn at your own pace, move between multiple courses, or switch to a different course</p>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <FaCertificate className="text-4xl text-orange-500 mb-2" />
          <span className="font-semibold">Unlimited Certificates</span>
          <p className="text-sm text-center">Earn a certificate for every learning program that you complete at no additional cost</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
