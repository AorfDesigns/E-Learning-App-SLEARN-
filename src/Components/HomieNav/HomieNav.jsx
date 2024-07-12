import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const HomieNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-4 flex items-center justify-between flex-wrap">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/Images/logo.svg" alt="Logo" className="w-[64px] h-[64px] mr-4" />
        <span className="text-gray-800 text-lg font-bold">SLEARN</span>
      </div>
      
      {/* Hamburger menu button */}
      <div className="block sm:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation links and login button */}
      <div className={`w-full sm:flex sm:items-center sm:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <Link to="/" className="text-gray-800 hover:text-orange-400 transition duration-300">Home</Link>
          <Link to="/category" className="text-gray-800 hover:text-orange-400 transition duration-300">Category</Link>
          <Link to="/courses" className="text-gray-800 hover:text-orange-400 transition duration-300">Courses</Link>
          <Link to="/blog" className="text-gray-800 hover:text-orange-400 transition duration-300">Blog</Link>
          <Link to="/logincomponent">
            <button className="bg-orange-400 hover:bg-transparent border-2 border-orange-400 text-gray-800 px-4 py-2 w-full sm:w-40 rounded-full transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomieNav;
