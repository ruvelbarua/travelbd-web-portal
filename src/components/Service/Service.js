import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { key, place, day, price, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{place}</h3>
            <h5>Day: {day}</h5>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${key}`}>
                <button className="btn btn-warning">Book {place.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;