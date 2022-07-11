import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className='d-flex justify-content-between me-auto'>
                <h2>All posts</h2>
                <Link to="/post/add">
                    <Button variant="outline-info">Add post</Button>
                </Link>
            </div>
        </>

    )
}
export default Header;