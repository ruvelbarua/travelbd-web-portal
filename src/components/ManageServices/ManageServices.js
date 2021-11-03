import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://ghostly-shadow-96316.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `https://ghostly-shadow-96316.herokuapp.com/services${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Successfully Deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    }
    return (
        <div className="container my-5">
            <h2 className="text-success">Manage Services</h2>
            <div className="row">
                {
                    services.map(service => <div key={service._id} className="col-md-3 bg-light border p-3">
                        <div className="">
                            <img src={service.img} alt="" />
                        </div>
                        <h3>{service.place}</h3>
                        <Button onClick={() => handleDelete(service._id)} variant="danger">Delete</Button>
                    </div>)
                }

            </div>

        </div>
    );
};

export default ManageServices;