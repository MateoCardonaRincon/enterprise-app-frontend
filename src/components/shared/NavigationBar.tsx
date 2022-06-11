import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import PrivateComponent from "./PrivateComponent";
import { Link } from "react-router-dom";

type Props = {};

const NavigationBar = (props: Props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
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
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
