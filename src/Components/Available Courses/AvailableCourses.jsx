import React from 'react';

// Sample data for courses
const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React, including components, state, and props.',
    duration: '4 weeks'
  },
  {
    id: 2,
    title: 'Advanced CSS with Tailwind',
    description: 'Deep dive into advanced CSS concepts using Tailwind CSS.',
    duration: '3 weeks'
  },
  {
    id: 3,
    title: 'JavaScript for Beginners',
    description: 'An introductory course on JavaScript programming language.',
    duration: '5 weeks'
  }
];

const AvailableCourses = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl text-gray-800 dark:text-gray-800 font-bold mb-4">Available Courses</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {courses.map(course => (
          <div key={course.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-gray-800 dark:text-gray-800 font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-800 dark:text-gray-800 mb-2">{course.description}</p>
            <span className="inline-block px-3 py-1 text-sm text-white bg-blue-500 rounded-full">{course.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCourses;
