import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import Logo1 from '../Pic/logom.png';
import { HashLink } from 'react-router-hash-link';


const NabVar = () => {
    return (
        <Navbar className="bg-light">
            <Container className="className=" justify-content-center>
                <Navbar.Brand className="mx-5 w-100%"><img src={Logo1} alt="" />
                </Navbar.Brand>
                <Navbar.Collapse >
                    <Navbar.Brand>
                        <Button as={HashLink} to="/home" variant="outline-primary">Home</Button>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Button as={HashLink} to="//services" variant="outline-primary">Services</Button>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Button as={HashLink} to="/myorder" variant="outline-primary"> My Orders</Button>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Button as={HashLink} to="/about" variant="outline-primary"> About</Button>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Button as={HashLink} to="/register" variant="outline-success"> Register</Button>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Button as={HashLink} to="/login" variant="outline-warning"> Login</Button>
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NabVar;