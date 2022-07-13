import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();

        action({ title, author, publishedDate, shortDescription, content })
    }
    
        return (
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col className="m-auto" lg={8} >
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
                            <Form.Label>Poblished</Form.Label>
                            <Form.Control type="date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
                            <Form.Label>Short description</Form.Label>
                            <Form.Control rows={4} as="textarea" placeholder="Enter short description" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                            <Form.Label>Main content</Form.Label>
                            <Form.Control rows={12} as="textarea" placeholder="Enter main content" value={content} onChange={e => setContent(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg="8" className="d-flex justify-content-center w-100">
                        <Button variant="primary" type="submit" >
                            {actionText}
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    };

    PostForm.propTypes = {
        action: PropTypes.func,
        actionText: PropTypes.string,
    }

export default PostForm;