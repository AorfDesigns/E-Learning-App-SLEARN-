import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SearchComponent = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Add your search functionality here
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-10">
      <div className={`transition-all duration-300 ease-in-out ${isFocused || searchQuery ? 'bg-white text-gray-800 shadow-lg' : 'bg-white'} rounded-md flex items-center px-4 py-2`}>
        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            className={`w-full bg-transparent outline-none transition-all duration-300 ease-in-out ${isFocused || searchQuery ? 'pt-2' : 'pt-2'}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <label className={`absolute left-4 transition-all duration-300 ease-in-out ${isFocused || searchQuery ? 'text-md top-[-8px]' : 'text-base top-3.2 text-gray-800'}`}>
            What do you want to learn today?
          </label>
        </div>
        <Link to="/signup">
        <button
          onClick={handleSearch}
          className="ml-2 text-gray-800 bg-orange-400 w-[128px] hover:bg-transparent border-[2px] border-orange-400 px-2 py-2 rounded-md transition-all duration-300 ease-in-out"
        >
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchComponent;
