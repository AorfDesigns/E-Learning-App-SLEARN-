// src/components/Newsletter.js

import React from 'react';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for subscribing user
    alert('Subscribed successfully!');
  };

  return (
    <div className="bg-gray-100 py-8 flex justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-8">Stay updated with our latest news and updates.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 rounded-l-md px-4 py-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:max-w-xs"
            required
          />
          <button
            type="submit"
            className="bg-orange-400 hover:bg-transparent border-[2px] border-orange-400 text-gray-800 font-semibold rounded-md px-4 py-2 sm:px-6 sm:py-2 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
