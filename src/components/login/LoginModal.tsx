import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LogIn from "./LogIn";
import { useSelector } from 'react-redux';
import SignIn from "./SignIn";
import { storeType } from "../../state/store";
import GoogleAuth from "./GoogleAuth";
import GitHubAuth from "./GitHubAuth";

type Props = {
    showLoginModal: boolean,
    setShowLoginModal: Function
}

const LoginModal: React.FC<Props> = (props) => {

    const logged = useSelector((state: storeType) => state.authentication.isLoggedIn);

    const { showLoginModal, setShowLoginModal } = props

    const [signIn, setSignIn] = useState(false)

    const handleClose = () => {
        setShowLoginModal(false);
    };

    return (
        <Modal show={showLoginModal && !logged} onHide={handleClose} centered>
            <Modal.Header style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Modal.Title>
                    <h5>Authentication</h5>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="d-flex-column">
                    {signIn ? <SignIn /> : <LogIn />}
                    <div className="d-flex row">
                        <h6 className="d-flex link justify-content-center" onClick={() => { setSignIn(!signIn) }}>
                            {signIn ? "Back to login" : "Or sign in!"}
                        </h6>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="col-6">
                            <GoogleAuth />
                        </div>
                        <div className="col-6">
                            <GitHubAuth />
                        </div>
                    </div>
                </div>

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
