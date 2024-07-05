import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const HomieNav = () => {
  return (
    <nav className="bg-transparent p-4 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/Images/logo.svg" alt="Logo" className="w-[64px] h-[64px] mr-4" />
        <span className="text-gray-800 text-lg font-bold">SLEARN</span>
      </div>
      
      {/* Navigation links and login button on the right */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-800 hover:text-orange-400 transition duration-300">Home</Link>
        <Link to="/category" className="text-gray-800 hover:text-orange-400 transition duration-300">Category</Link>
        <Link to="/courses" className="text-gray-800 hover:text-orange-400 transition duration-300">Courses</Link>
        <Link to="/blog" className="text-gray-800 hover:text-orange-400 transition duration-300">Blog</Link>
        <Link to="/logincomponent">
          <button className="bg-orange-400 hover:bg-transparent border-2 border-orange-400 text-gray-800 px-4 py-2 w-40 rounded-full transition duration-300">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default HomieNav;
