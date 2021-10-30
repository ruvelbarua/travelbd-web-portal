import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { key, place, day, price, description, img } = service || {};

    const history = useHistory();

    const handleDetails = (key) => {
        const uri = `/sdetails/${key}`
        history.push(uri)
    }

    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{place}</h3>
            <h5>Day: {day}</h5>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <button className="btn btn-warning" onClick={() => handleDetails(key)}>Details</button>
        </div>
    );
};

export default Service;