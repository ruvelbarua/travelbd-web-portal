import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, place, price, day, description, img } = service;
    return (
        <div className="service container p-4">
            <img src={img} alt="" />
            <h3>{place}</h3>
            <h5>{day}</h5>
            <h5>Price:{price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Details {place}</button>
            </Link>
            <p className="text-danger">Special Offer 20% discount.</p>
        </div >
    );
};

export default Service;