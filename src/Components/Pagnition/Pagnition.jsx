// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`mx-1 px-4 py-2 rounded-full ${
            currentPage === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;


