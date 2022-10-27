import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import { FiLogOut } from 'react-icons/fi';
import img from './images.jpeg'
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

import Toggle from '../../Toggle/Toggle';
const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user);
    
    const handleLogOut = () => {
        toast('logout successfully')
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }


    return (
      <div className="mb-5">
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
          <Container>
            <Image style={{ height: "40px" }} roundedCircle src={img}></Image>
            <Navbar.Brand href="#home">
              <h3 className="ms-4">Learn with Shuvo</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="#features">
                  <Link
                    className="text-white variant"
                    variant="outline-light"
                    to="/"
                  >
                    <h6>HOME</h6>
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link href="#features">
                  <Link
                    className="text-white variant"
                    variant="outline-light"
                    to="/course"
                  >
                    <h6>COURSE</h6>
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link href="#features">
                  <Link
                    className="text-white variant"
                    variant="outline-light"
                    to="/blog"
                  >
                    <h6> BLOG</h6>
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link href="#features">
                  <Link
                    className="text-white variant"
                    variant="outline-light"
                    to="/faq"
                  >
                    <h6> FAQ</h6>
                  </Link>{" "}
                </Nav.Link>
              </Nav>
              <Nav>
                <>
                  {user?.uid ? (
                    <div className="d-flex align-items-center">
                      <h5 className="me-2"> {user?.displayName}</h5>
                    </div>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button className="mb-2" variant="light">
                          Login
                        </Button>{" "}
                      </Link>
                      <Link to="/register">
                        <Button variant="light"> Register</Button>{" "}
                      </Link>
                    </>
                  )}{" "}
                </>
                <Nav.Link eventKey={2} href="#memes">
                  {user?.photoURL ? (
                    <>
                      <Tippy content={user?.displayName}>
                        <Image
                          style={{ height: "40px" }}
                          roundedCircle
                          src={user?.photoURL}
                        ></Image>                    
                      </Tippy><button variant="outline-light" onClick={handleLogOut}>
                        <FiLogOut />
                        <ToastContainer></ToastContainer>
                      </button>
                    </>
                  ) : (
                    <FaUserAlt></FaUserAlt>
                  )}
                </Nav.Link>
              </Nav>
              <Toggle></Toggle>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;