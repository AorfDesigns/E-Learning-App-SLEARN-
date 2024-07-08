// src/components/PopularCourse.js

import React from 'react';
import { UserIcon, StarIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

const courses = [
  {
    id: 1,
    title: 'Advanced React',
    description: 'Learn advanced concepts of React.js including hooks, context, and more.',
    image: 'https://via.placeholder.com/150',
    users: 1200,
    rating: 4.8,
    price: 49.99,
  },
  {
    id: 2,
    title: 'Modern JavaScript',
    description: 'Master the latest features of JavaScript including ES6+.',
    image: 'https://via.placeholder.com/150',
    users: 800,
    rating: 4.5,
    price: 39.99,
  },
  {
    id: 3,
    title: 'CSS for Developers',
    description: 'Learn CSS from basics to advanced with real-world examples.',
    image: 'https://via.placeholder.com/150',
    users: 950,
    rating: 4.7,
    price: 29.99,
  },
  {
    id: 4,
    title: 'CSS for Developers',
    description: 'Learn CSS from basics to advanced with real-world examples.',
    image: 'https://via.placeholder.com/150',
    users: 950,
    rating: 4.7,
    price: 29.99,
  },
  {
    id: 5,
    title: 'CSS for Developers',
    description: 'Learn CSS from basics to advanced with real-world examples.',
    image: 'https://via.placeholder.com/150',
    users: 950,
    rating: 4.7,
    price: 29.99,
  },
  {
    id: 6,
    title: 'CSS for Developers',
    description: 'Learn CSS from basics to advanced with real-world examples.',
    image: 'https://via.placeholder.com/150',
    users: 950,
    rating: 4.7,
    price: 29.99,
  },
];

const PopularCourse = () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-2xl font-extrabold text-gray-900 mb-4">Popular Courses for you</h4>
        <p>Get the best courses with the best price with world class tutors</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-40 object-cover" src={course.image} alt={course.title} />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-3">{course.description}</p>
                <div className="flex items-center text-sm text-gray-600 mb-2 gap-4">
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 mr-1" />
                    <span>{course.users}</span>
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 mr-1 text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="h-5 w-5 mr-1" />
                    <span>${course.price}</span>
                  </div>
                </div>
        
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
