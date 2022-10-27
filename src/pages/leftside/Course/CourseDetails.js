import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Fulldetails from './Fulldetails';
import SingleDetail from './SingleDetail';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const CourseDetails = () => {
    const details = useLoaderData();
     const { balance, registered,tags, company, address, about, name,_id,id, picture } = details;
    console.log(details);
  const notify = () => {
    toast.success("Congratulations! you have got access.");
  };
   return (
     <div>
       <Card>
         <Card.Img variant="top" src={picture} />
         <Card.Body>
           <h6>Company: {company} </h6>
           <Card.Title>{name}</Card.Title>
           <Card.Text>{about}</Card.Text>
           <h6 className=""> Address: {address}</h6>
           <Card.Text>
             <h5 className="text-danger">Price: {balance}</h5>
           </Card.Text>
           <h5 className="text-primary">Registration ID: {registered}</h5>
           <Button onClick={notify} variant="primary">
             {" "}
             <ToastContainer /> Go somewhere
           </Button>

           <p> Tags:{tags} </p>
         </Card.Body>
       </Card>
     </div>
   );}
export default CourseDetails;