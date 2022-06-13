import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LogIn from "./LogIn";
import { useDispatch } from 'react-redux';
import SignIn from "./SignIn";

type Props = {
    showLoginModal: boolean,
    setShowLoginModal: Function
}

const LoginModal: React.FC<Props> = (props) => {

    const { showLoginModal, setShowLoginModal } = props

    const [signIn, setSignIn] = useState(false)

    const dispatch = useDispatch();

    const handleClose = () => {
        setShowLoginModal(false);
    };

    return (
        <Modal show={showLoginModal} onHide={handleClose} centered>
            <Modal.Header style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Modal.Title>
                    <h5>LOG IN</h5>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {signIn ? <SignIn /> : <LogIn />}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal >
    );
};

export default LoginModal;
