import React from 'react';
import { Form, Button, NavLink } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Registration.css';
import Banner from '../Banner/Banner';


const Registration = () => {

    const { signInWithGoogle, setUser } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setUser(res.user)
                history.push(url)
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container-flex my-3 m-5">
            <div className="">
                <div className="my-3 text-center text-danger">
                    <h2>Registration Form</h2>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-8 my-2">
                            <div className="my-2">
                                <Banner></Banner>
                            </div>
                        </div>
                        <div className="col-md-4 p-5 container border  bg-light my-3 form-design">
                            <div className="">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter Name" required />
                                        <Form.Text className="text-muted">
                                            Please Enter Your Full Name
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="name" placeholder="Contact Number" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" required />
                                    </Form.Group>
                                    <Button onClick={handleGoogleLogin} variant="primary" type="submit">
                                        Register
                                    </Button>
                                    <NavLink> Alredy Registred:<Link to="/login">Please Login</Link>
                                    </NavLink>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;