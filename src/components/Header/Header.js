import React from 'react';
import { Container, Navbar, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Hooks/useAuth';
import Logo1 from '../Pic/logom.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
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
                            <ButtonGroup>
                                {
                                    user?.email ?
                                        <Button onClick={logOut} variant="light"> Log Out</Button>
                                        :
                                        <DropdownButton as={ButtonGroup} title="User" id="dropdown">
                                            <Dropdown.Item as={HashLink} to="/login" eventKey="1">Login</Dropdown.Item>
                                            <Dropdown.Item as={HashLink} to="/register" eventKey="2">Register</Dropdown.Item>
                                        </DropdownButton>
                                }
                                <h6 className="text-pirmary">Signin:{user?.email}</h6>
                            </ButtonGroup>
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div>
    );
};

export default Header;