import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';
import bnrimg from '../Pic/banner.jpg';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className="my-5 bg-light">
            <div className="row">
                <div className="col-md-8">
                    <div>
                        <img src={bnrimg} alt="" />
                    </div>
                </div>
                <div className="col-md-4 my-5 p-5 bg-secondary">
                    <div className="text-light tour-card">
                        <h2 className="text-"> Tour Place: {service.place}</h2>
                        <h5>Service Id:{service._id}</h5>
                        <h3>Package: {service.day}</h3>
                        <h5>Total Price: {service.price}</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Booking;