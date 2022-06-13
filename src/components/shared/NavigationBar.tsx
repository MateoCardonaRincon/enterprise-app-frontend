import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import PrivateComponent from "./PrivateComponent";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "../../state/store";
import { setLogOut } from "../../state/slice/loginSlice";

type Props = {}

const NavigationBar: React.FC<Props> = (props) => {

    const navigate = useNavigate();

    const { isLoggedIn, user } = useSelector((state: storeType) => state.authentication);

    const dispatch = useDispatch()

    const [showLoginModal, setShowLoginModal] = useState(false);

    const onShowLoginModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setShowLoginModal(true);
    };

    const onLogOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        localStorage.removeItem('user')
        dispatch(setLogOut())
        setShowLoginModal(false);
        navigate('/')
    };

    return (
        <Navbar bg="secondary sticky-top" variant="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <PrivateComponent>
                        <>
                            <Nav.Link as={Link} to="/stock">Stock</Nav.Link>
                            <Nav.Link as={Link} to="/sales">Sales</Nav.Link>
                            <Nav.Link as={Link} to="/suppliers">Suppliers</Nav.Link>
                            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                            <Nav.Link as={Link} to="/bills">Bills</Nav.Link>
                        </>
                    </PrivateComponent>
                </Nav>
                {isLoggedIn ?
                    <>
                        <span className="mx-4">{user}</span>
                        <button className="btn btn-dark" onClick={(e) => onLogOut(e)}>
                            Log Out
                        </button> </> :
                    <button className="btn btn-dark" onClick={(e) => onShowLoginModal(e)}>
                        Log In
                    </button>}
                <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
            </Container>
        </Navbar>
    );
};

export default NavigationBar;

