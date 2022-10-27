import React from 'react';

import { useLoaderData } from 'react-router-dom';
import CoursesCart from '../CoursesCart/CoursesCart';
import Lefside from '../leftside/Lefside';

const Courses = () => {
  const courses = useLoaderData();
    return (
      <div>
       <h3>home {courses.length}</h3>
        <div className="container">
          <div className="row">
            <div className="col-9">
            {
               courses.map(singleCourse =><CoursesCart key={singleCourse._id} singleCourse={singleCourse} ></CoursesCart> )
            }
            </div>
            <div className="col-3">
              <Lefside />
            </div>
          </div>
        </div>
        </div>
    );
};

export default Courses;