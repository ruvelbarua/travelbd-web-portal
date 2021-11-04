import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Logo1 from '../Pic/logom.png';
import './Header.css';

const Header = () => {
    return (
        // const {user, logout} = useAuth();
        <Navbar collapseOnSelect expand="lg" className="bg-light">
            <Container className="className=" justify-content-center>
                <Navbar.Brand className="w-100%"><img src={Logo1} alt="" />
                </Navbar.Brand>
                <Navbar.Collapse >
                    <Navbar.Brand>
                        <Button as={HashLink} to="/home" variant="">Home</Button>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Button as={HashLink} to="/services" variant="">Pakages</Button>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Button as={HashLink} to="/myorder" variant=""> My Orders</Button>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Button as={HashLink} to="/admin" variant=""> Admin</Button>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Button as={HashLink} to="/about" variant=""> About</Button>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Button as={HashLink} to="/login" variant=""> Login</Button>
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;