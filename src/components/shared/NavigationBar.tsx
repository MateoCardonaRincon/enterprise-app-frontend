import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import PrivateComponent from "./PrivateComponent";
import { Link } from "react-router-dom";
import Login from "./Login";

const NavigationBar: React.FunctionComponent = () => {
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
                <Login />
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
