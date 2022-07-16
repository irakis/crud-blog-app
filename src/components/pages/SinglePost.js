import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router';
import PostHeader from '../common/PostHeader';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findPost } from '../../redux/postsRedux';
import { useState } from 'react';
import ShowModal from '../views/ShowModal';
import { Navigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { removePost } from '../../redux/postsRedux';


const SinglePost = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const currentPost = useSelector(state => findPost(state, postId));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(show => true);


  const handleDelete = e => {
    e.preventDefault()
    dispatch(removePost(postId));
    handleClose();
  }

  if (show) { return (
    <ShowModal dataShow={show} handleClose={handleClose} id={postId} handleRemove={handleDelete} />
  )} else if (!currentPost) { return <Navigate to="/" /> }

  return (
    <Container>
      <Row>
        <Col className="ml-5">
          <PostHeader postData={currentPost} />
        </Col>
        <Col className="mb-auto d-flex justify-content-left " lg="4" md="3" xs="2">
          <Link to={"/post/edit/" + postId}>
            <Button className="m-2" variant="outline-info" >Edit</Button>
          </Link>
          <Button onClick={handleShow} className="m-2" variant="outline-danger">Delete</Button>
        </Col>
      </Row>
      <Row>
        <Col>
        <p dangerouslySetInnerHTML={{ __html: currentPost.content }} />
        </Col>
      </Row>
    </Container>
  )
};

export default SinglePost;