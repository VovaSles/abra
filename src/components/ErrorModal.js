import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { setErrorAction } from '../redux/reducer';

const ErrorModal = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  return (
    <Modal.Dialog className="justify-content-center mt-5" >
      <Modal.Body>
        {error.message}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => dispatch(setErrorAction(null))}>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}

export default ErrorModal