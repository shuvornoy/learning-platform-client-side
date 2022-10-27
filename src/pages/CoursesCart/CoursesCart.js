import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const CoursesCart = ({singleCourse}) =>{
    const { total_sit, details, _id, picture, price, name } = singleCourse;

    
    return (
     
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>
            <h1>Name: {name}</h1>
          </Card.Title>
          <h3>Total sit :{total_sit}</h3>
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
          <h5 className="text-primary">Price: {price}</h5>
        
            <Link
              className="d-flex align-items-center justify-content-between"
              to={`/coursedetails/${_id}`}
            >
              <Button  variant="primary">
                Details
              </Button>
            </Link>
        </Card.Body>
      </Card>
    );
};

export default CoursesCart;