import React from 'react'
import EnrolledCourses from '../../Components/EnrolledCourses/EnrolledCourses'
import AvailableCourses from '../../Components/Available Courses/AvailableCourses'
import CompletedCourses from '../../Components/CompletedCourse/CompletedCourse'
import FavoriteCourses from '../../Components/Favorite Courses/FavoriteCourses'

const Courses = () => {
  return (
    
    <div>
    <div className='text-center'>
     <EnrolledCourses />
    </div>
    <div>
      <AvailableCourses />
    </div>
    <div>
      <CompletedCourses />
    </div>
    <div>
      <FavoriteCourses />
    </div>
  </div>
  )
}

export default Courses