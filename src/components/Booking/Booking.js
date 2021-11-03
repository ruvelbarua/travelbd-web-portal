import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';
import bnrimg from '../Pic/banner.jpg';
import { Button } from 'react-bootstrap';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://ghostly-shadow-96316.herokuapp.com/services/${serviceId}`)
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
                <div className="col-md-4 my-5 p-5 bg-light">
                    <div className="text-primary tour-card">
                        <div className="text-danger">
                            <h5>OUR PACKAGE INFORMATION</h5>
                        </div>
                        <img src={service.place} alt="" />
                        <h4 className="text-place"> Dhaka-{service.place}-Dhaka</h4>
                        <h3>Package: {service.day}</h3>
                        <h5>Total Price: {service.price}</h5>
                        <p>Person: Single</p>
                        <Button variant="danger">Book Now</Button>
                        <p className="text-success">
                            Note: We have special discount price 20%. Valid Minimum 10 persons.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Booking;