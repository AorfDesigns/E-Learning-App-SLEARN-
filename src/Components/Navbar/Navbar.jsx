import React, { useState } from 'react';
import { FaGlobe, FaSearch } from 'react-icons/fa';
import DarkModeToggle from '../DarkMode/DarkModeToggle'; // Adjust the import path as necessary
import { Menu } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout, setActivePath }) => {
  const [language, setLanguage] = useState('English');
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleLogoutClick = () => {
    setActivePath('/logincomponent');
    onLogout();
    navigate('/');
  };

  return (
    <nav className="bg-transparent p-4 flex items-center justify-between w-full">
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
      <div className="flex items-center space-x-2">
        <a href="#" className="text-gray-800 dark:text-white text-[16px]">Degrees</a>
        <a href="#" className="text-gray-800 dark:text-white text-[16px]">Find Careers</a>
      </div>
      <div className="flex items-center space-x-4 ml-4">
        <div className="flex items-center space-x-2">
          <FaGlobe className="text-gray-800 dark:text-white" />
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-transparent text-gray-800 dark:text-white outline-none"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        <span className="text-gray-800 dark:text-white font-semibold text-sm">John Doe</span>
        <div className="relative inline-block text-left">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="flex items-center focus:outline-none">
                  <img
                    src="./Images/Account.jpg"
                    alt="Account"
                    className="w-8 h-8 rounded-full"
                  />
                </Menu.Button>
                {open && (
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white outline-none rounded-md shadow-lg py-1 z-20">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block px-4 py-2 text-sm text-gray-800 dark:text-gray-800`}
                        >
                          My Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#logout"
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block px-4 py-2 text-sm text-gray-800 dark:text-gray-800`}
                          onClick={handleLogoutClick}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                )}
              </>
            )}
          </Menu>
        </div>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
