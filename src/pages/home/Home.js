import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCart from '../CoursesCart/CoursesCart';


const Home = () => {
    const courses = useLoaderData();
    
    return (
        <div>
           
            <h3>home {courses.length}</h3>
            
            {
               courses.map(singleCourse =><CoursesCart key={singleCourse._id} singleCourse={singleCourse} ></CoursesCart> )
            }
        </div>
    );
};

export default Home;