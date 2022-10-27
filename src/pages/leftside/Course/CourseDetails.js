import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Form, FormCheck } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


const CourseDetails = () => {

  const [accepted, setAccepted] = useState(false) 

    const details = useLoaderData();
     const { balance, registered,tags, company, address, about, name,_id,id, picture } = details;
    console.log(details);
  const notify = () => {
    toast.success("Congratulations! you have got access.");
  };
  const handleAccepted = (event) =>{
    setAccepted(event.target.checked)
}
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
               <h5 className="text-primary">Registration ID: {registered}</h5>
             
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
           
           <Button onClick={notify} variant="primary" disabled={!accepted}>
             {" "}
             <ToastContainer /> Go somewhere
           </Button>

           <p> Tags:{tags} </p>
         </Card.Body>
       </Card>
     </div>
   );}
export default CourseDetails;