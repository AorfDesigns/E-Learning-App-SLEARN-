import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
const HomieNav = () => {
  return (
    <nav className="bg-transparent p-4 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/Images/logo.svg" alt="Logo" className=" w-[64px] h-[64px] mr-4" />
        <span className="text-white text-lg font-bold">SLEARN</span>
        <div className="flex items-center relative w-full max-w-lg ml-4 mx-auto">
        <div className="absolute left-0 flex items-center pl-3">
          <div className="bg-orange-500 p-2 rounded-full ml-2">
            <FaSearch className="text-white dark:text-gray-800" />
          </div>
        </div>
        <input
          type="text"
          placeholder="What do you want to learn Next?"
          className="w-[350px] ml-2 pl-14 pr-4 py-4 rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800 text-sm focus:outline-none"
        />
      </div>
      </div>
      
      {/* Login button on the right */}
      <div>
        <Link to="/logincomponent" className="text-gray-800 text-[16px] font-semibold py-2 px-4 border bg-orange-400 w-[250px] rounded-full outline-none  hover:text-white transition duration-300">Login</Link>
      </div>
    </nav>
  );
};

export default HomieNav;
