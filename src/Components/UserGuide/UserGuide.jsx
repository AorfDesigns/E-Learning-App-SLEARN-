import React from 'react';

const UserGuide = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Create an Account",
      description: "Sign up with your personal details and create a username and password."
    },
    {
      step: "Step 2",
      title: "Browse Courses",
      description: "Explore the course catalog and use filters to find your desired courses."
    },
    {
      step: "Step 3",
      title: "Enroll in a Course",
      description: "Click 'Enroll Now' to join a course."
    },
    {
      step: "Step 4",
      title: "Start Learning",
      description: "Access your enrolled courses from the dashboard and begin learning."
    },
    {
      step: "Step 5",
      title: "Track Your Progress",
      description: "Monitor your progress, check completion status, and view grades."
    },
    {
      step: "Step 6",
      title: "Get Help",
      description: "Use the contact support feature for any assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8 text-left text-gray-900 dark:text-white">User Guide</h2>
        <div className="flex flex-wrap gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 min-w-[250px] p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.step}: {step.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserGuide;


