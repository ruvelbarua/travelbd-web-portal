import React, { useState } from 'react';
import { Form, Button, NavLink, ButtonGroup } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Registration.css';
import Banner from '../Banner/Banner';


const Registration = () => {

    const { signInWithGoogle, updateName, createAccountWithGoogle, setUser, setIsLoading } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleGetName = (e) => {
        setName(e.target.value)
    }
    const handleGetEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleGetPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        createAccountWithGoogle(email, password)
            .then((res) => {
                setIsLoading(true)
                updateName(name)
                setUser(res.user);
                history.push(url)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            })
            .finally(() => {
                setIsLoading(false)
            })
    };


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
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
                                <Form onSubmit={handleRegistration}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="name" onBlur={handleGetName} placeholder="Enter Name" required />
                                        <Form.Text className="text-muted">
                                            Please Enter Your Full Name
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control type="email" onBlur={handleGetEmail} placeholder="Enter email" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password"
                                            onBlur={handleGetPassword}
                                            placeholder="Password" required />
                                        <Button className="my-3" variant="warning" type="submit"> Submit</Button>
                                    </Form.Group>
                                    <NavLink> Alredy Registred:<Link to="/login">Please Login</Link>
                                    </NavLink>
                                </Form>
                                <Button onClick={handleGoogleLogin} variant="primary" type="submit">
                                    Register
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;