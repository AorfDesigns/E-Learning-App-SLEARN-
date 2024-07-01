import React from 'react';

const CourseDetails = ({ course }) => {
    return (
        <div className="bg-white p-6 rounded shadow-md flex justify-between items-center">
            <div className="flex-1">
                <h2 className="text-gray-800 dark:text-gray-800 font-bold mb-4">{course.title}</h2>
                <p className="text-gray-800 dark:text-gray-800 mb-4">{course.description}</p>
                <div className="mb-4">
                    <h3 className="text-gray-800 dark:text-gray-800 font-bold">Instructor</h3>
                    <p className='text-gray-800 dark:text-gray-800'>{course.instructor}</p>
                </div>
                <div>
                    <h3 className="text-gray-800 dark:text-gray-800 font-bold">Duration</h3>
                    <p className='text-gray-800 dark:text-gray-800'>{course.duration} hours</p>
                </div>
            </div>
            <div className="ml-4">
                <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-48 h-48 rounded-full object-cover"
                />
            </div>
        </div>
    );
};

export default CourseDetails;

