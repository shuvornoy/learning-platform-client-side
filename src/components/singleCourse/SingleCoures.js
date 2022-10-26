import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import SiteCard from '../SiteCard/SiteCard';
import'./SingleCourse.css'

const SingleCoures = () => {

    const params = useParams()

    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/course/${params.id}`)
        .then(response => response.json())
        .then(json => setCourses(json))
    },[])

    const {title,image, seatsLeft, price, description} =courses
    return (
        <>
          <div className="main-section">
            <section className='parent'>
            <div className="container">
            <div className="">
                <div className="benar-img">
                    <img src={image} alt=""/>
                </div>
                
                <h3>{title}</h3>
                <article>{description}</article>
                <div className="writer-img d-flex ">
                </div>
                <h4>Seats Left :{seatsLeft}</h4>
                <h4>Price : {price}</h4>
            </div>
           </div>
            </section>
            <section>
                <SiteCard></SiteCard>
            </section>
          </div>
        </>
    );
};

export default SingleCoures;