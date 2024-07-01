// src/components/Module.js
import React, { useState } from 'react';
import CourseOutline from '../../Components/CourseOutline/CourseOutline';



const Module = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <CourseOutline />
    </div>
  );
};

export default Module;

