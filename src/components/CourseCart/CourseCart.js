import React from 'react';
import {useNavigate} from "react-router-dom";
import './CoursesCart.css'


const CourseCart = ({courses}) => {
    const {title, image, seatsLeft,id} = courses;
   // console.log(courses)

    const navigate = useNavigate()

 const Submit = (id)=>{
    navigate(`/courses/${id}`)
 }
 console.log(id)

    return (
     <>
        <div className="col-xl-4 col-lg-4 card-details">
            <div className='mt-4 card'>
                <div className='course-img'>
                    <img src={image} alt="" />
                </div>
                <div className='course-details p-3'>  
                    <h3>Topic:  {title}</h3>
                    <div className="d-flex justify-content-between">
                    <h5>Seats Left: {seatsLeft}</h5>
                    <button className='btn btn-outline-dark' onClick={()=>Submit(id)}>Details</button>
                    </div>
                </div>
             </div>
        </div>
    </>
    );
};

export default CourseCart;