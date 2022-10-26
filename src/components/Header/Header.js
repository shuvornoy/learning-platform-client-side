import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import Toggle from '../Toggle/Toggle';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinkStyle = ({ isActive }) =>{
        
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration : isActive  ? 'none' :'underline'
        }
    
    }

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect className='mb-4 py-4 px-5  ' expand="lg" bg="light" variant="light">
            <Navbar.Brand><h2 className='px-lg-5'>LEARN-JAVASCRIPT</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto fs-4">
                    <NavLink style={navLinkStyle} to='/'></NavLink>
                    <NavLink style={navLinkStyle} to='/home'>Home</NavLink>
                    <NavLink style={navLinkStyle} to='/courses'>COURSES</NavLink>
                    <NavLink style={navLinkStyle} to='/faq'>FAQ</NavLink>
                    <NavLink style={navLinkStyle} to='/blog'>BLOG</NavLink>
                </Nav>
                <Nav className='fs-5'>
                    <>
                        {
                            user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    
                                </>
                                :
                                <>
                                    <NavLink style={navLinkStyle} to='/login'>Login</NavLink>
                                    <NavLink style={navLinkStyle} to='/register'>Register</NavLink>

                                </>
                        }
                            </>
                            <NavLink>
                                {user?.photoURL ?
                              <> <Image title={user?.displayName}
                                    style={{ height:'30px'}}
                                    roundedCircle
                                    src={user?.photoURL}>
                                     </Image>
                                 <Button variant="light" className='fs-5 fw-normal' onClick={handelLogOut}>Logout</Button>
                                </>
                                :    
                                <FaUser></FaUser>  
                            }
                        </NavLink>
                    
                </Nav>
                <Toggle/>
            </Navbar.Collapse>
    </Navbar>
    );
};

export default Header;