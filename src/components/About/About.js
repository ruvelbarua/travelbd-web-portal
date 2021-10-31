import React from 'react';
import { FcDepartment, FcGoogle, FcCustomerSupport } from "react-icons/fc";
import aboutimg from '../Pic/about.jpg';
import logoimg from '../Pic/logom.jpg';
import './About.css';


const About = () => {
    return (
        <div className="container-fluid d-flex my-3">
            <div className="">
                <div className="my-3 text-center text-danger">
                    <h2>ABOUT US</h2>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-8 my-2">
                            <div className="my-2">
                                <img className="about-img" src={aboutimg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 g-2">
                            <h2>Description:</h2>
                            <div>
                                <img src={logoimg} alt="" />
                            </div>
                            <p className="text-align">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum possimus unde aspernatur labore porro ad magnam corrupti vitae, numquam modi odit perferendis similique qui esse adipisci voluptatum hic eum! Quibusdam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum possimus unde aspernatur labore porro ad magnam corrupti vitae, numquam modi odit perferendis similique qui esse adipisci voluptatum hic eum! Quibusdam.</p>
                            <div className="text-dark my-3">
                                <h4>Contact:</h4>
                                <div className="my-2">
                                    <p className="ftext"><FcDepartment />: www.travelbd.com</p>
                                    <p className="ftext"><FcGoogle />: travelbd@gmail.com</p>
                                    <p className="ftext"> <FcCustomerSupport /><span>:+0088-(101)-998005-8</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;