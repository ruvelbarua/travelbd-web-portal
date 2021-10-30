import React from 'react';
import { Link } from 'react-router-dom';
import nfimg from '../Pic/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '80%' }} src={nfimg} alt="" />
            <Link to="/home"><button>Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;