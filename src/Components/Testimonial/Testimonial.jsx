import React from 'react';

const Testimonial = ({ image, name, content }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg shadow-md">
      <img
        className="w-16 h-16 rounded-full mb-4"
        src={image}
        alt={`${name}'s picture`}
      />
      <div className="text-center">
        <p className="text-white dark:text-gray-800 font-semibold">{name}</p>
        <p className="mt-2 text-white dark:text-gray-800">{content}</p>
      </div>
    </div>
  );
};

const TestimonialsGrid = () => {
  const testimonials = [
    {
      image: "./Images/Account.jpg",
      name: "John Doe",
      content: "SLEARN Platform is exceptional! It has transformed my learning experience with its interactive and",
    },
    {
      image: "./Images/Account.jpg",
      name: "Jane Smith",
      content: "I love SLEARN! The platform is intuitive and the courses are comprehensive. It has been a game-changer for my professional development.",
    },
    {
      image: "./Images/Account.jpg",
      name: "Samuel Green",
      content: "The best e-learning platform out there. SLEARN offers an incredible variety of courses and the quality is unmatched.",
    },
    {
      image: "./Images/Account.jpg",
      name: "Emily Johnson",
      content: "SLEARN is a fantastic platform for anyone looking to learn new skills. The courses are well-structured and the community is very supportive.",
    },
    {
      image: "./Images/Account.jpg",
      name: "Michael Brown",
      content: "Highly recommend SLEARN for anyone serious about learning. The platform is user-friendly and the content is very informative.",
    },
    {
      image: "./Images/Account.jpg",
      name: "Emma Wilson",
      content: "I've tried many e-learning platforms, and SLEARN is by far the best. The courses are up-to-date and the instructors are very knowledgeable.",
    },
    {
      image: "./Images/Account.jpg",
      name: "David Lee",
      content: "SLEARN has everything I need to improve my skills. The courses are comprehensive and the support team is very responsive.",
    },
    {
      image: "./Images/Account.jpg",
      name: "Sophia Davis",
      content: "Fantastic platform with a wide range of courses. SLEARN has helped me advance my career significantly.",
    },
  ];

  return (
    <>
    <div>
    <h2 className="text-2xl font-bold mb-8 text-center">Testimonials</h2>
    </div>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            content={testimonial.content}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default TestimonialsGrid;

