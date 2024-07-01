import React from 'react';

const StudentProgress = ({ student }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl text-gray-800 dark:text-gray-800 font-bold">{student.name}</h3>
            <p className="text-gray-800 dark:text-gray-800">Email: {student.email}</p>
            <div className="mt-2">
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-800">Progress: {student.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: `${student.progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default StudentProgress;

