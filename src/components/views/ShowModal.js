import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ShowModal = (props) => {

  return (
    <>
      <Modal show={props.dataShow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove this post from the app! Are you sure you want to do this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.handleRemove}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowModal;