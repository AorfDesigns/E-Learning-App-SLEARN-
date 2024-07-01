import React, { useState } from 'react';

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    profileVisibility: true,
    emailNotifications: false,
    showActivityStatus: true,
    shareData: false,
  });

  const handleToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center flex-col justify-center p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8 text-left">Privacy Settings</h2>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-900 dark:text-white">Profile Visibility</span>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.profileVisibility}
                onChange={() => handleToggle('profileVisibility')}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-orange-400 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-orange-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 dark:border-gray-600"></div>
            </label>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-900 dark:text-white">Email Notifications</span>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.emailNotifications}
                onChange={() => handleToggle('emailNotifications')}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-orange-400 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-orange-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 dark:border-gray-600"></div>
            </label>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-900 dark:text-white">Show Activity Status</span>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.showActivityStatus}
                onChange={() => handleToggle('showActivityStatus')}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-orange-400 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 dark:border-gray-600"></div>
            </label>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-900 dark:text-white">Share Data with Third Parties</span>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.shareData}
                onChange={() => handleToggle('shareData')}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-orange-400 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 dark:border-gray-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
