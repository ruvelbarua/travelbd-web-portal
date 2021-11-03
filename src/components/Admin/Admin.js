import React from 'react';
import AddService from '../AddService/AddService';

const Admin = () => {
    return (
        <div className="my-2">
            <div className="text-light p-3 bg-secondary border">
                <h2>This Admin Page</h2>
            </div>
            <AddService></AddService>
        </div>
    );
};

export default Admin;