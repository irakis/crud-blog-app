import React from 'react';
import PostForm from '../common/PostForm';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from '../../redux/postsRedux';

const AddPostForm = () => {
    const dispatch = useDispatch('');
    const navigate = useNavigate('');


    const handleSubmit = post => {
        dispatch(addPost(post));
        navigate("/", { replace: true })
        };

    return (
        <PostForm category="Open this select file..." action={handleSubmit} actionText='Add Post'/>
        )
}

export default AddPostForm;