import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Dpic from '../Pic/sbimg.jpg';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { id } = useParams()
    const [serviceDetails, setServiceDetails] = useState([])
    const [spacificServiceDetails, setSpacificServiceDetails] = useState({})

    useEffect(() => {
        fetch('/toursdata.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    useEffect(() => {
        if (serviceDetails.length > 0) {
            const matchedData = serviceDetails.find(detail => detail.key == id)
            setSpacificServiceDetails(matchedData);
        }

    }, [serviceDetails])

    return (
        <div className="container-fluid my-5">
            <div className="text-success">
                <h2>OUR PACKAGE INFORMATION</h2>
            </div>
            <div className="row my-3 pkg-card">
                <div className="col-md-8">
                    <img src={Dpic} alt="" />
                </div>
                <div className="col-md-4">
                    <Card className="bg-light border">
                        <Card.Body>
                            <Card.Text>
                                <h2>Package:  {spacificServiceDetails.place}</h2>
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Text>
                                <h4>Day:  {spacificServiceDetails.day}</h4>
                            </Card.Text>
                            <Card.Text>
                                <h4>Person:  {spacificServiceDetails.person}</h4>
                            </Card.Text>
                            <Card.Text>
                                <h4>Price:  {spacificServiceDetails.price}</h4>
                            </Card.Text>
                            <Button variant="danger">Booking Now</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;