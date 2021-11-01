import React from 'react';
import About from '../About/About';
import AddService from '../AddService/AddService';
import AddUsers from '../AddUsers/AddUsers';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';
import Registration from '../Registration/Registration';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Services></Services>
            <Registration></Registration>
            <ManageOrders></ManageOrders>
            <AddService></AddService>
            <AddUsers></AddUsers>
        </div>
    );
};

export default Home;