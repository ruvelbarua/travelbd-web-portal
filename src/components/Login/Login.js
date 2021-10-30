import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import initializeFirebase from '../Firebase/firebase.init';
import useAuth from '../Hooks/useAuth';
import { getAuth, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { Card } from 'react-bootstrap';
import './Login.css';

initializeFirebase();
const provider = new GoogleAuthProvider();

const Login = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    // const { signInUsingGoogle } = useAuth();

    // const history = useHistory()
    // const location = useLocation()

    // const url = location.state?.from || "/home";

    const handleGoogleLogin = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                };
                setUser(userInfo);


            });
    }

    return (
        <div className="my-5">
            <div className="container">
                <Card className="card-login" border="info" style={{ width: '25rem', height: '20rem' }}>
                    <Card.Header><h2 className="text-danger">Please Login</h2></Card.Header>
                    <Card.Body className="my-5">
                        <Card.Title><h4>{user.name}</h4></Card.Title>
                        <Card.Title><h4>{user.email}</h4></Card.Title>
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