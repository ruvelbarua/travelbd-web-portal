import React from 'react';
import AddService from '../AddService/AddService';
import ManageServices from '../ManageServices/ManageServices';

const Admin = () => {
    return (
        <div className="my-2">
            <div className="text-danger p-3">
                <h2>ADMIN PAGE</h2>
            </div>
            <ManageServices></ManageServices>
            <AddService></AddService>
        </div>
    );
};

export default Admin;