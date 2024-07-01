import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="dark-mode-toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="dark-mode-toggle"
            className="sr-only"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="block bg-gray-600 w-16 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              darkMode ? 'transform translate-x-full bg-gray-800' : ''
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;



