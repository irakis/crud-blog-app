import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <Navbar  expand='lg' bg='primary' variant="dark" className='mt-4 mb-4 rounded'>
            <Container>
                <Nav>
                    <Navbar.Brand href="/">Blog.app</Navbar.Brand>
                </Nav>
                <Nav className='me-auto, justify-content-end'>
                    <Nav.Link as={NavLink} to="/post/:id">Post</Nav.Link>
                    <Nav.Link as={NavLink} to="/post/add">Add</Nav.Link>
                    <Nav.Link as={NavLink} to="/post/edit/:id">Edit</Nav.Link>
                    <Nav.Link as={NavLink} to="/About">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default NavBar;