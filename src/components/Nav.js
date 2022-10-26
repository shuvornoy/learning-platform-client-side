import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Account from "./Account";


function Navb() {
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home">Home</Link>
            <Link to="/link">Link</Link>
            <Link to="#home">Home</Link>
            <Link to="#link">Link</Link>
          </Nav>
        </Navbar.Collapse>
        <Account />
      </Container>
    </Navbar>
  );
}
export default Navb;
