import React from 'react';
import { FcDepartment, FcGoogle, FcCustomerSupport } from "react-icons/fc";
import aboutimg from '../Pic/about1.jpg';
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
                        <div className="col-md-6 my-2">
                            <div className="">
                                <img className="about-img" src={aboutimg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-align-center">
                                <div className="text-center text-success">
                                    <h2>Description</h2>
                                </div>
                                <div className="my-4">
                                    <h5 className="text-align">TRAVELBD is a bangladesh tour packages organizing company.We have more then 10 years good experiances in tourism. Every "National and International" people booking our amazing tour packages.Our expert team members always good support to every tour members.Eventho, we provide tour guide and interprater of internationl people. A tourist can select group tour and extra discount offer. Our company always services quality hotel booking, transport, organic foods and more. So, why you late! "Book Now" our lowest tours packages. Thank you vist our page.</h5>
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
            </div>
        </div>
    );
};
export default About;