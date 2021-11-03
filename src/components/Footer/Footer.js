import React from 'react';
import { Card, Col, Container, NavLink, Row } from 'react-bootstrap';
import { FcCustomerSupport, FcDepartment, FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import Cimg from '../Pic/credit.png';
import Fimg from '../Pic/tbdlogo.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className="container-flex my-5 p-3">
            <div className="row bg-dark">
                <div className="col-md-4">
                    <div className="text-light my-5">
                        <h4>Contact:</h4>
                        <div className="my-2 ">
                            <h5><FcDepartment />: www.travelbd.com</h5>
                            <h5><FcGoogle />: travelbd@gmail.com</h5>
                            <h5> <FcCustomerSupport />:+0088-(101)-998005-8</h5>
                            <div className="p-4 gap-4 d-flex my-4">
                                <h5>              <ImFacebook2 />:  Facebook
                                </h5>
                                <h5>
                                    <FaInstagramSquare />:  Instagram
                                </h5>
                                <h5>
                                    <FaTwitterSquare />:  Twiter
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-5 text-light">
                    <h5>We Accept Card:</h5>
                    <img className="master-card" src={Cimg} alt="" />
                </div>
                <div className="col-md-4">
                    <div className="my-5">
                        <div>
                            <img className="fimg-size" src={Fimg} alt="" />
                        </div>
                        <div className="text-light">
                            <p>Design By: Ruvel Barua. <br />Email: ruvel.br78@gmail.com<br />Thanks by: Programming Hero Team
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;