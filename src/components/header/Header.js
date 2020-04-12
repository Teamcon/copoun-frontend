import React, { Component } from 'react';
import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
                    <Navbar bg="white" variant="white" >
                        <Navbar.Brand><Link to="/my-account">Account</Link></Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link><Link to="/sign-in">Sign In</Link></Nav.Link>
                        <Nav.Link><Link to="/sign-up">Sign Up</Link></Nav.Link>
                        <Nav.Link><Link to="/sign-out">Sign Out</Link></Nav.Link>
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        </Nav>
                    </Navbar>
         );
    }
}
 
export default Header ;