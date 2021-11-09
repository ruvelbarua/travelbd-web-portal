import React, { useState } from 'react';
import { Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const url = location.state?.from || "/"
    // const url = "/"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleGetPassword = (e) => {
        setPassword(e.target.value);
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                setIsLoading(true)
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
    }

    return (
        <div className="my-5">
            <div className="text-center">
                <Card className="card-login" border="info" style={{ width: '30rem', height: '28rem' }}>
                    <Card.Header><h2 className="text-primary">Please Login</h2></Card.Header>
                    <Card.Body className="my-5">
                        <Form onSubmit={handleLoginWithEmailAndPassword}>
                            <Card.Text>
                                <InputGroup size="lg">
                                    <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
                                    <FormControl type="text" onBlur={handleGetEmail} placeholder="email" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                            </Card.Text>
                            <Card.Text>
                                <InputGroup size="lg">
                                    <InputGroup.Text id="inputGroup-sizing-lg">Passward</InputGroup.Text>
                                    <FormControl type="password"
                                        onBlur={handleGetPassword}
                                        placeholder="password" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <button type="submit" value="login"
                                    className="btn btn-danger my-3">Login</button>
                            </Card.Text>
                        </Form>
                        <p>Or</p>
                        <Card.Text>
                            <button onClick={handleGoogleLogin} className="btn btn-danger">Google Sign In</button>
                        </Card.Text>
                        <Card.Text>
                            <p>New User?<Link to="/register">Please Registration</Link></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Login;