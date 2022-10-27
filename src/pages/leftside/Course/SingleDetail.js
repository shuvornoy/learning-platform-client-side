import React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const SingleDetail = ({singleData}) => {
    console.log(singleData);
    const { about, name, picture} = singleData;
    return (
      <div>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                  <Card.Title> singleData theke {name} </Card.Title>
                  <Card.Text>{about} </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default SingleDetail;