import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Post = ({ postData }) => {

    console.log(postData);
    return (
        <Col xs="12" md="6" lg="4" className="p-2 justify-content-between">
            <Card className="mw-100 mt-2">
                <Card.Body>
                    <Card.Title>{postData.title}</Card.Title>
                    <Card.Text><b>Author:  </b>{postData.author}</Card.Text>
                    <Card.Text><b>Published:  </b>{postData.publishedDate}</Card.Text>
                    <Card.Text>{postData.shortDescription}</Card.Text>
                    <Link to={"/post/" + postData.id}>
                        <Button variant="primary">Read more</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Post;
