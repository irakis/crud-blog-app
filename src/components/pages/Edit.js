import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EditPostForm from '../features/EditPostForm';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router';

const Edit = () => {
  const { postId } = useParams();
if (!postId) return (<Navigate to="/"/>);

  return (
    <Container>
      <Row>
        <Col className="m-auto" lg={8}>
          <h2>Edit post here!</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <EditPostForm postId={postId} />
        </Col>
      </Row>
    </Container>
  )
};

export default Edit;