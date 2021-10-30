import React from 'react';
import { Card, Col, Container, NavLink, Row } from 'react-bootstrap';
import { FcCustomerSupport, FcDepartment, FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import Fimg from '../Pic/img2.jpg';
import './Footer.css';
import Logo from '../Pic/logom.jpg'


const Footer = () => {
    return (
        <div className="my-5">
            <Card className="bg-dark text-white">
                <Card.Img className="img-size" src={Fimg} alt="Card image" />
                <Card.ImgOverlay className="text-position">
                    <Card.Title>Help Line:</Card.Title>
                    <Container className="my-3">
                        <Row>
                            <Col className="container-fluid d-flex font-size" xs={6} md={4}>
                                <NavLink className="text-light"><FcDepartment />:  www.travelbd.com</NavLink>
                                <NavLink className="text-light"><FcGoogle />: travelbd@gmail.com</NavLink>
                                <p><FcCustomerSupport />: <span>+0088-(101)-998005-8</span></p>
                            </Col>
                            <Col className="align-center" xs={6} md={4}>
                                <img src={Logo} alt="" />
                            </Col>
                            <Col className="container-fluid d-flex font-size2" xs={6} md={4}>
                                <NavLink className="text-light"><ImFacebook2 />  : facebook</NavLink>
                                <NavLink className="text-light"><FaInstagramSquare />  : instgram</NavLink>
                                <NavLink className="text-light"><FaTwitterSquare />  : twiter</NavLink>
                            </Col>
                        </Row>
                    </Container>


                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Footer;