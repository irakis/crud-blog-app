import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <Navbar className='justify-content-between me-auto'>
                <h2>All posts</h2>
                <Link to="/post/add">
                    <Button variant="outline-info">Add post</Button>
                </Link>
            </Navbar>
        </>

    )
}
export default Header;