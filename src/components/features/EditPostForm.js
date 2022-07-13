import React from 'react';
import PostForm from '../common/PostForm';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editPost } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { findPost } from '../../redux/postsRedux';

const EditPostForm = (props) => {
    const dispatch = useDispatch('');
    const navigate = useNavigate('');
    const id = props.postId;

    const currentPost = useSelector(state => findPost(state, id));
    console.log(currentPost);



    const handleSubmit = (post) => {
        dispatch(editPost({ ...post, id }));
        navigate("/", { replace: true });
    };

    return (
        <PostForm
            action={handleSubmit}
            actionText='Edit Post'
            title={currentPost.title}
            author={currentPost.author}
            publishedDate={currentPost.publishedDate}
            shortDescription={currentPost.shortDescription}
            content={currentPost.content} />
    );
};

export default EditPostForm;