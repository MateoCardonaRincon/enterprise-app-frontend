import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LoginForm from "../LoginForm";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from "../../state/slice/loginSlice";
import { storeType } from "../../state/store";

type Props = {};

const Login = (props: Props) => {

    const logged = useSelector((state: storeType) => state.logged);

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const showLoginModal = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        setShow(true);
        dispatch(toggleLogin())
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <button className="btn btn-primary" onClick={(e) => showLoginModal(e)}>
                {logged ? 'Log out' : 'Log in'}
            </button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>
                        <h5>LOG IN</h5>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <LoginForm />
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
