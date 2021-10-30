import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('toursdata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div key="services">
            <h2 className="text-primary mt-5">OUR TOUR PACKAGES</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;