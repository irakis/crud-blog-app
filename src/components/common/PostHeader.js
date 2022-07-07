import React from 'react';
import Card from 'react-bootstrap/Card';

const PostHeader = (props) => {

    return (
        <Card className="w-50 mt-2 m-auto border-0">
            <Card.Body>
                <Card.Title>Title: {props.postData.title}</Card.Title>
                <Card.Text><b>Author:  </b>{props.postData.author}</Card.Text>
                <Card.Text><b>Published:  </b>{props.postData.publishedDate}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default PostHeader;