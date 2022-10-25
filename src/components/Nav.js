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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Account />
      </Container>
    </Navbar>
  );
}
export default Navb;
