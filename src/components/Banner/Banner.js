import React from 'react';
import { Card } from 'react-bootstrap';
import bnrimg from '../Pic/banner.jpg';
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <div className="bg-dark text-white bnr-size">
                <img src={bnrimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;