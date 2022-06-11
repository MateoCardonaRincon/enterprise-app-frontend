import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LoginForm from "../LoginForm";

type Props = {};

const Login = (props: Props) => {

  const [show, setShow] = useState(false);

  const showLoginModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={(e) => showLoginModal(e)}>
        Log in
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h5>LOG IN</h5>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <LoginForm/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
