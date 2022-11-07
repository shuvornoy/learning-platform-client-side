import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";
import { useLoaderData } from 'react-router-dom';
import {  FormCheck } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pdf from "react-to-pdf";
import {useNavigate} from 'react-router-dom'



const ref = React.createRef();


const CourseDetails = () => {
  const detail = useLoaderData();
  const navigate = useNavigate()
 

  const [accepted, setAccepted] = useState(false) 

     const {title, price,  name, picture, details, student, total_sit ,_id} = detail;
   
    
  const notify = () => {
    
    toast.success("Congratulations! you have got access.");
    navigate(`/checkout/${_id}`);
  };
  const handleAccepted = (event) =>{
    setAccepted(event.target.checked)
}
   return (

     <div className='container'>
       <Card ref={ref}>
         <Card.Img variant="top" src={picture} />
         <Card.Body>
           <h2>Title: {title} </h2>
           <Card.Title>{name}</Card.Title>
           </Card.Body>
           <h5>Total Student: {student}</h5>
           <h6>Total Sit:v{total_sit}</h6>
             <h5 className="text-danger">Price: {price}</h5>
             <p>{details}</p>
           </Card>
            <Card.Text>
             <FormCheck
              type="checkbox"
              onClick={handleAccepted}
              label={
                <>
                  {" "}
                  Accept<Link to="/terms"> Terms and conditions</Link>{" "}
                </>
              }
              ></FormCheck>
           </Card.Text>
           <div className='d-flex justify-content-between mb-5'>
           {/* <Link to=`/checkout/${id}`> */}
           <Button onClick={notify} variant="primary" disabled={!accepted}>
             {" "}
             <ToastContainer /> Get Premium
           </Button>
           {/* </Link> */}
           <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => <Button onClick={toPdf}>Generate PDF</Button>}
           </Pdf>
           </div>
         
       
     </div>
   );}
export default CourseDetails;