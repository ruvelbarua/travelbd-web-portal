import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {
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
        <div className="my-5">
            <div className="container">
                <Card className="card-login" border="info" style={{ width: '25rem', height: '20rem' }}>
                    <Card.Header><h2 className="text-primary">Please Login</h2></Card.Header>
                    <Card.Body className="my-5">
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