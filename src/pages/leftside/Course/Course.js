import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCart from '../../CoursesCart/CoursesCart';


const Course = () => {
    const courses = useLoaderData();
    return (
      <div>
        <h3>lo course: {courses.length} </h3>
        {courses.map(singleCourse => <CoursesCart key={singleCourse.id} singleCourse={singleCourse}></CoursesCart> )}
      </div>
    );
};

export default Course;