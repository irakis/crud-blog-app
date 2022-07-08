import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
    const [newTitle, setNewTitle] = useState();
    const [newAuthor, setNewAuthor] = useState();
    const [newDate, setNewDate] = useState();
    const [newShortDes, setNewShortDes] = useState();
    const [newContent, setNewContent] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        
        dispatch(addPost({ title: newTitle, author: newAuthor, Published: newDate, shortDescription: newShortDes, content: newContent }));
        setNewAuthor('');
        setNewContent('');
        setNewDate('');
        setNewShortDes('');
        setNewTitle('');

        navigate("/", {replace: true});
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="m-auto" lg={8} >
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Enter author" value={newAuthor} onChange={e => setNewAuthor(e.target.value)} />
                        <Form.Label>Poblished</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" value={newDate} onChange={e => setNewDate(e.target.value)} />
                        <Form.Label>Short description</Form.Label>
                        <Form.Control rows={4} as="textarea" placeholder="Enter short description" value={newShortDes} onChange={e => setNewShortDes(e.target.value)} />
                        <Form.Label>Main content</Form.Label>
                        <Form.Control rows={12} as="textarea" placeholder="Enter main content" value={newContent} onChange={e => setNewContent(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg="8" className="d-flex justify-content-center w-100">
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default AddPostForm;