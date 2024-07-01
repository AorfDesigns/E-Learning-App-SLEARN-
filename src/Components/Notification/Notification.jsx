import React from 'react';

const Notification = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center">
        <div className="bg-orange-400 text-white rounded-full flex justify-center items-center w-10 h-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 15v4m0 0v4m0-4h4m-4 0H6a2 2 0 01-2-2v-6a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-bold text-gray-800">Notification Title</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit tincidunt, consectetur sapien nec, pellentesque felis.</p>
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <button className="text-sm text-blue-500 hover:text-blue-700">View Details</button>
      </div>
    </div>
  );
};

export default Notification;
