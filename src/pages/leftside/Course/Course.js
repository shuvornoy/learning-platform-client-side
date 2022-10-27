import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCart from '../../CoursesCart/CoursesCart';
import CourseDetails from './CourseDetails';
import SingleDetail from './SingleDetail';

const Course = () => {
    const courses = useLoaderData();
    return (
      <div>
        <h3>lo course: {courses.length} </h3>
        {courses.map(singleCourse => <CoursesCart key={singleCourse.id} singleCourse={singleCourse}></CoursesCart> )}
        {/* {
            courses.map(singleData => <SingleDetail key={singleData} singleData={singleData}></SingleDetail>)
        } */}
      </div>
    );
};

export default Course;