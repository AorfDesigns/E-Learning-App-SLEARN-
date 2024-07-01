import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Sidebar4 = () => {
  return (
    <div className="w-[200px] h-full bg-[rgb(27, 27, 27);] text-white flex flex-col items-center pt-8">
      <a href="#" className="w-full px-6 py-3 text-gray-800 dark:text-white flex items-center hover:bg-orange-400">
        <FontAwesomeIcon icon={faLifeRing} className="mr-4" />
        Support
      </a>
      <Link to="/personalinfopage">
      <a href="#" className="w-full px-6 py-3 text-gray-800 dark:text-white flex items-center hover:bg-orange-400 mr-8">
        <FontAwesomeIcon icon={faCog} className="mr-4" />
        Settings
      </a>
      </Link>
    </div>
  );
};

export default Sidebar4;
