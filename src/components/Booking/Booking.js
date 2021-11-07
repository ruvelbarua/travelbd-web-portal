import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';
import bnrimg from '../Pic/banner.jpg';
import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ManageServices/ManageServices';
import '../Login/Login';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    // const email = setUser?.getItem("email");

    useEffect(() => {
        fetch(`https://ghostly-shadow-96316.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    const onSubmit = (data) => {
        // data.email = email;
        fetch("https://ghostly-shadow-96316.herokuapp.com/myOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => setService(result));
    };

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
                        <div className="text-success">
                            <h3>PACKAGE DETAILS</h3>
                        </div>
                        <Form onSubmit={onSubmit}>
                            <img src={service.img} alt="" />
                            <h4 className="text-place"> Dhaka-{service.place}-Dhaka</h4>
                            <h3>Package: {service.day}</h3>
                            <h5>Total Price: {service.price}</h5>
                            <p>Person: Single</p>
                            <Link to={`/sdetails/${service._id}`}>
                                <Button variant="danger">ADD to Card</Button>
                            </Link>
                            <p className="text-success">
                                Note: We have special discount price 20%. Valid Minimum 10 persons.
                            </p>

                        </Form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Booking;