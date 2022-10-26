import React, { useEffect, useState } from 'react';
import './SiteCard.css'
import { useNavigate} from "react-router-dom";
const SiteCard = () => {

    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(response => response.json())
        .then(json => setCourses(json))
    },[])

const {id} = courses;
    
 const navigate = useNavigate()

 const Submit = (id)=>{
    navigate(`/courses/${id}`)
 }


    return (
        <div>
            <div className="side-card">
                   <h1>Our Topic</h1>
                               {
                                    courses?.map(course => <div key={courses.id} course={course}>
                                       <h3 onClick={()=>Submit(id)}>{course.title}</h3> 
                                    </div>)
                                }
                </div>
        </div>
    );
};

export default SiteCard;