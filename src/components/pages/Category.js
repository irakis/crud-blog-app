import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../views/PostCard";
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Category = () => {
    const {category} = useParams();
    const categoryPosts = useSelector(state =>state.posts.filter(post=>post.category === category))

    return (
        <div>
            <h2>Category: </h2>
            <Row className="justify-content-between align-items-between">
                {categoryPosts.map(card => <PostCard postData={card} key={card.id} />)}
            </Row>
        </div>

    )
}
export default Category