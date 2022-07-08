import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import AddPostForm from '../features/AddPostForm.js';

const Add = () => {
  return (
    <Container>    <Row>
      <Col className="m-auto" lg={8}>
        <h2>Add Post</h2>
      </Col>
    </Row>
      <AddPostForm />
    </Container>


  )
};

export default Add;