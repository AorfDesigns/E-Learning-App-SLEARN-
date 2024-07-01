import React from 'react';

const CourseCard = ({ title, description }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-gray-800 dark:text-white font-bold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default CourseCard;
