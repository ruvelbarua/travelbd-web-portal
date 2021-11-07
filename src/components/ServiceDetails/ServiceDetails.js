import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { id } = useParams()
    const [serviceDetails, setServiceDetails] = useState([])
    const [spacificServiceDetails, setSpacificServiceDetails] = useState({})

    useEffect(() => {
        fetch(`https://ghostly-shadow-96316.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    useEffect(() => {
        if (serviceDetails.length > 0) {
            const matchedData = serviceDetails.find(detail => detail.key !== id)
            setSpacificServiceDetails(matchedData);
        }

    }, [serviceDetails])

    return (
        <div className="container-fluid">
            <div className="my-3 pkg-card">
                <div className="container">
                    <Card className="bg-light border">
                        <Card.Body>
                            <Card.Text>
                                <h3>Place:{spacificServiceDetails?.place}</h3>
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={spacificServiceDetails?.img} />
                        <Card.Body>
                            <Card.Text>
                                <h4>Day:  {spacificServiceDetails?.day}</h4>
                            </Card.Text>
                            <Card.Text>
                                <h4>Price:  {spacificServiceDetails?.price}</h4>
                            </Card.Text>
                            <div className="">
                                <Button variant="primary">BOOK Now</Button>
                                <Button variant="danger">Cancel</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;