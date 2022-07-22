import React from 'react';
import Card from 'react-bootstrap/Card';
import {dateToStr} from '../../utils/dateToStr';

const PostHeader = (props) => {

    return (
        <Card className="w-50 mt-2 m-auto border-0">
            <Card.Body>
                <Card.Title>Title: {props.postData.title}</Card.Title>
                <Card.Text><b>Author:  </b>{props.postData.author}</Card.Text>
                <Card.Text><b>Published:  </b>{dateToStr(props.postData.publishedDate)}</Card.Text>
                <Card.Text><b>Category:  </b>{props.postData.category}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default PostHeader;