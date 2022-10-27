import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Lefside from '../leftside/Lefside';

const Courses = () => {
    return (
        <Container>
          <Row>
            <Col lg="4">
              <Lefside />
            </Col>
            <Col lg="8">
              <Outlet></Outlet>
            </Col>
          </Row>
        </Container>
    );
};

export default Courses;