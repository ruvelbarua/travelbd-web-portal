import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import nfimg from '../Pic/404.jpg';

const NotFound = () => {
    return (
        <div className="my-5">
            <div>
                <img style={{ width: '50rem', height: '20rem' }} src={nfimg} alt="" />
            </div>
            <br />
            <Button as={HashLink} to="/home" variant="outline-primary">Home</Button>
        </div>
    );
};

export default NotFound;