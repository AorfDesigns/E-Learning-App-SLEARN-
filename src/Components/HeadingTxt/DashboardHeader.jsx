import React from 'react';
import { FaSearch } from 'react-icons/fa';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[rgb(27, 27, 27);]">
      <div>
        <h1 className="text-[16px] text-white font-bold">Your Dashboard</h1>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-12 pr-4 py-2 rounded-full bg-white text-black focus:outline-none"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <div className="bg-orange-500 p-2 rounded-full">
            <FaSearch className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;




