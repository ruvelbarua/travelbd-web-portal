import React from 'react';
import bnrimg from '../Pic/sbimg.jpg';
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <div className="bg-dark text-danger bnr-size">
                <img src={bnrimg} alt="" />
                <h2 className="my-3">AMAZING SUNDARBAN</h2>
            </div>
        </div>
    );
};

export default Banner;