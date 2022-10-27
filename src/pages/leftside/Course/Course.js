import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCart from '../../CoursesCart/CoursesCart';



const Course = () => {
    const course = useLoaderData();
    return (
      <div className='container'>
        <h3>Total Course: {course.length} </h3>
        
       
        {
        course.map(singleCourse => <CoursesCart 
          key={singleCourse.id}
          singleCourse={singleCourse}>

          </CoursesCart> )
        }
      </div>
    );
};

export default Course;