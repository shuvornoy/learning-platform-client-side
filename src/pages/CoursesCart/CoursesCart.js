import React from 'react';

import { Form } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const CoursesCart = ({singleCourse}) =>{

    
    const { balance, address, about, details, name,_id,id, picture } = singleCourse;

    
    return (
     
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>name: {name}</Card.Title>
          <Card.Text>
            {" "}
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200) + "..."}{" "}
                
              </p>
            ) : (
              <p>{details} </p>
            )}
            
          </Card.Text>
        
            <Link
              className="d-flex align-items-center justify-content-between"
              to={`/coursedetails/${_id}`}
            >
              <Button  variant="primary">
                Details
              </Button>
              <h5 className="text-primary">Price: {balance}</h5>
            </Link>
        
        </Card.Body>
      </Card>
    );
};

export default CoursesCart;