import React from 'react';

const Community = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold mb-4">Community</h2>
      <p className="text-gray-700 mb-2">
        Welcome to our community! Here you can engage with like-minded individuals and share ideas.
      </p>
      <p className="text-gray-700 mb-4">
        Join discussions, ask questions, and stay updated with our latest events and announcements.
      </p>
      <div className="flex justify-end w-full">
        <button className="bg-orange-400 hover:bg-transparent border-[2px] border-orange-400 text-gray-800 px-6 py-2 rounded-full">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Community;

