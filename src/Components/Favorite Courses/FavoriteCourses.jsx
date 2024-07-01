import React from 'react';

const FavoriteCourseCard = ({ image, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative">
      <img
        className="w-full h-40 object-cover rounded-t-lg mb-4"
        src={image}
        alt={`${title} image`}
      />
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {description}
      </p>
      <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
        Favorite
      </span>
    </div>
  );
};

const FavoriteCourses = () => {
  const courses = [
    {
      image: "https://via.placeholder.com/400",
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python. Perfect for beginners!",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Advanced Web Development",
      description: "Master the skills of building modern web applications using React and Node.js.",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Data Science with Python",
      description: "Explore the world of data science and machine learning with Python.",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Digital Marketing",
      description: "Learn the strategies and tools to become a successful digital marketer.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center flex-col justify-center p-6">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4 text-left">Favorite Courses</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <FavoriteCourseCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCourses;
