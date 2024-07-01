import React from 'react';
// import Header from '../../Components/Header/Header';
import CourseDetails from '../../Components/CourseDetails/CourseDetails';
import StudentProgress from '../../Components/StudentProgress/StudentProgress';


const Dashboard = () => {
  const course = {
    title: 'Advanced React',
    description: 'An in-depth course on React.js covering advanced topics and best practices.',
    instructor: 'John Doe',
    instructorImage: './Images/Account.jpg', // Replace with actual image URL
    duration: 40,
};


    const students = [
        { name: 'Alice Johnson', email: 'alice@example.com', progress: 75 },
        { name: 'Bob Smith', email: 'bob@example.com', progress: 50 },
        { name: 'Charlie Brown', email: 'charlie@example.com', progress: 30 },
    ];

    return (
        <div className="flex">
            <div className="flex-grow bg-[rgb(27, 27, 27)]">
                {/* <Header /> */}
                <div className="p-8 text-black">
                    <CourseDetails course={course} />
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Student Progress</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
                        {students.map((student, index) => (
                            <StudentProgress key={index} student={student} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;



