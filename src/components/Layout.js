
// import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import classes from "../styles/Layout.module.css";
import Navb from "./Nav";


function Layout({ children }) {
  return (
    <>
      <Navb />
      <Outlet />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
      {/* <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <h2>side</h2>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <h2>site</h2>
                    </Col>
                </Row>
            </Container>
       */}
        
    
    </>
  );
}
export default Layout;
