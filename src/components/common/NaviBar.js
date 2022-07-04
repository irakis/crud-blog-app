import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'rect-bootstrap/NavLink';



const NaviBar = () => {
    return (
                <Nav className='me-auto'>
                    <Nav.Link as={ NavLink } to="/post/:id">Post</Nav.Link>
                    <Nav.Link as={ NavLink } to="/post/add">Add</Nav.Link>
                    <Nav.Link as={ NavLink } to="/post/edit/:id">Edit</Nav.Link>
                    <Nav.Link as={ NavLink } to="/About">About</Nav.Link>
                </Nav>
    )
};

export default NaviBar;