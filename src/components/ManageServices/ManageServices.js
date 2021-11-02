import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>This is Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.place}</h3>
                    <button>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;