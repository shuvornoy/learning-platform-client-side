import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const CoursesCart = ({singleCourse}) =>{

    const [accepted, setAccepted] = useState(false)
    const { balance, address, about, details, name,_id,id, picture } = singleCourse;

    const handleAccepted = (event) =>{
        setAccepted(event.target.checked)
    }
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
                <Link to={`/coursedetails/${_id}`}>reademore</Link>{" "}
              </p>
            ) : (
              <p>{details} </p>
            )}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={handleAccepted}
                label={
                  <>
                    {" "}
                    Accept<Link to="/terms"> Terms and condition</Link>{" "}
                  </>
                }
              />
            </Form.Group>
          </Card.Text>
        
            <Link
              className="d-flex align-items-center justify-content-between"
              to={`/coursedetails/${_id}`}
            >
              <Button disabled={!accepted} variant="primary">
                Buy now
              </Button>
              <h5 className="text-primary">Price: {balance}</h5>
            </Link>
        
        </Card.Body>
      </Card>
    );
};

export default CoursesCart;