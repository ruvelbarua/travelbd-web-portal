import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Logo1 from '../Pic/logom.jpg';
import { HashLink } from 'react-router-hash-link';


const NabVar = () => {
    return (
        <Navbar>
            <Navbar.Brand className="mx-5"><span><img src={Logo1} alt="" /></span></Navbar.Brand>
            <Container>
                <Navbar.Brand as={HashLink} to="/home">
                    Home
                </Navbar.Brand>
                <Navbar.Brand as={HashLink} to="/services">
                    Services
                </Navbar.Brand>
                <Navbar.Brand as={HashLink} to="/morder">
                    Manage Orders
                </Navbar.Brand>
                <Navbar.Brand as={HashLink} to="/myorder">
                    My Orders
                </Navbar.Brand>
                <Navbar.Brand as={HashLink} to="/about">
                    About
                </Navbar.Brand>
                <Navbar.Brand as={HashLink} to="/register">
                    Register
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/login">Login</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NabVar;