import React from 'react';

const CompletedCourseCard = ({ image, title, description, completionDate }) => {
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
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
        Completed on: {completionDate}
      </p>
      <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
        Completed
      </span>
    </div>
  );
};

const CompletedCourses = () => {
  const courses = [
    {
      image: "https://via.placeholder.com/400",
      title: "Introduction to Programming",
      description: "Learned the basics of programming using Python.",
      completionDate: "2024-01-01"
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Advanced Web Development",
      description: "Mastered building modern web applications using React and Node.js.",
      completionDate: "2024-02-15"
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Data Science with Python",
      description: "Explored data science and machine learning with Python.",
      completionDate: "2024-03-10"
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Digital Marketing",
      description: "Learned strategies and tools for successful digital marketing.",
      completionDate: "2024-04-05"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center flex-col justify-center p-6">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4 text-left">Completed Courses</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CompletedCourseCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            completionDate={course.completionDate}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedCourses;

