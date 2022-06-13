import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import PrivateComponent from "./PrivateComponent";
import { Link } from "react-router-dom";
import LoginModal from "../login/LoginModal";
import { useSelector } from "react-redux";
import { storeType } from "../../state/store";

type Props = {}

const NavigationBar: React.FC<Props> = (props) => {

    const logged = useSelector((state: storeType) => state.logged);

    const [showLoginModal, setShowLoginModal] = useState(false);

    const onShowLoginModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setShowLoginModal(true);
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
                {logged ?
                    <button className="btn btn-dark" onClick={(e) => onShowLoginModal(e)}>
                        Log Out
                    </button> :
                    <button className="btn btn-dark" onClick={(e) => onShowLoginModal(e)}>
                        Log In
                    </button>}
                <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
