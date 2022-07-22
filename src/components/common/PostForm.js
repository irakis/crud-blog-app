import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { CustomQuill as ReactQuill } from "../features/CustomQuill";
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import SelectOptionForm from "./SelectOptionForm";

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);


    const { register, handleSubmit: validate, formState: { errors } } = useForm()

    const handleSubmit = e => {
        setDateError(!publishedDate)
        setContentError(!content)
        if (content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content })
        }
    }

    return (
        <Form onSubmit={validate(handleSubmit)}>
            <Row>
                <Col className="m-auto" lg={8} >
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control {...register("title", { required: true, minLength: 3 })} type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
                        {errors.title && <small className="d-block form-text text-danger mt-2">This field is required. Min 3 characters.</small>}
                        <Form.Label>Author</Form.Label>
                        <Form.Control  {...register("author", { required: true, minLength: 3 })} type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
                        {errors.author && <small className="d-block form-text text-danger mt-2">This field is required with the length min. 3 characters</small>}
                        <Form.Label>Poblished</Form.Label>
                        <DatePicker selected={publishedDate} onChange={date => setPublishedDate(date)} />
                        {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                        <Form.Label>Category:</Form.Label>
                        <SelectOptionForm data={props.category} className="mt-2"/>
                        <Form.Label>Short description</Form.Label>
                        <Form.Control {...register("description", { required: true, minLength: 20 })} rows={4} as="textarea" placeholder="Enter short description" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                        {errors.description && <small className="d-block form-text text-danger mt-2">This field is required with the length min. 20 characters</small>}
                        <Form.Label>Main content</Form.Label>
                        <ReactQuill theme="snow" value={content} onChange={setContent}></ReactQuill>
                        {contentError && <small className="d-block form-text text-danger mt-2">This field also is required</small>}
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
    title: PropTypes.string,
    author: PropTypes.string,
    shortDescription: PropTypes.string,
    content: PropTypes.string,
}

export default PostForm;
