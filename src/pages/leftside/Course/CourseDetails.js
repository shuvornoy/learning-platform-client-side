import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {  FormCheck } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


const CourseDetails = () => {
  const details = useLoaderData();
  console.log(details)

  const [accepted, setAccepted] = useState(false) 

     const {title, price,  name, picture } = details;
    
  const notify = () => {
    toast.success("Congratulations! you have got access.");
  };
  const handleAccepted = (event) =>{
    setAccepted(event.target.checked)
}
   return (

     <div className='container'>
       <Card>
         <Card.Img variant="top" src={picture} />
         <Card.Body>
           <h6>Title: {title} </h6>
           <Card.Title>{name}</Card.Title>
            <Card.Text>
             <h5 className="text-danger">Price: {price}</h5>
             <FormCheck
              type="checkbox"
              onClick={handleAccepted}
              label={
                <>
                  {" "}
                  Accept<Link to="/terms"> Terms and condition</Link>{" "}
                </>
              }
              ></FormCheck>
           </Card.Text>
           <Link to='/checkout'>
           <Button onClick={notify} variant="primary" disabled={!accepted}>
             {" "}
             <ToastContainer /> Go somewhere
           </Button>
           </Link>
         </Card.Body>
       </Card>
     </div>
   );}
export default CourseDetails;