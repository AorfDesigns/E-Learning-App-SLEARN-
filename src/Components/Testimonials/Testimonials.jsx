// src/components/Testimonials.js

import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    testimonial: 'This platform has transformed the way I learn and grow in my career.',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager',
    testimonial: 'The courses are well-structured and the instructors are amazing!',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Mark Johnson',
    position: 'UI/UX Designer',
    testimonial: 'I highly recommend this platform to anyone looking to enhance their skills.',
    image: 'https://via.placeholder.com/100',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-2xl font-extrabold text-gray-900 mb-8">What Our Students Are Saying About Us</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-white shadow-lg rounded-lg p-6 cursor-pointer transition-transform transform ${
                index === activeIndex ? 'scale-105 border-2 border-orange-400' : 'scale-100'
              }`}
              onClick={() => handleSetActiveIndex(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-8 ${index === activeIndex ? 'bg-orange-400' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
