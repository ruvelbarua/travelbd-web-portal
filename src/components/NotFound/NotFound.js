import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import nfimg from '../Pic/404.jpg';

const NotFound = () => {
    return (
        <div className="my-5">
            <div>
                <img style={{ width: '50rem', height: '20rem' }} src={nfimg} alt="" />
            </div>
            <br />
            <Button onClick="/home" variant="outline-secondary">Home</Button>
        </div>
    );
};

export default NotFound;