import React from 'react';

import { useLoaderData } from 'react-router-dom';
import CoursesCart from '../CoursesCart/CoursesCart';
import Lefside from '../leftside/Lefside';

const Courses = () => {
  const courses = useLoaderData();
    return (
      <div>
       
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8">
            {
               courses.map(singleCourse =><CoursesCart key={singleCourse._id} singleCourse={singleCourse} ></CoursesCart> )
            }
            </div>
            <div className="col-xl-4 col-md-4">
              <Lefside />
            </div>
          </div>
        </div>
        </div>
    );
};

export default Courses;