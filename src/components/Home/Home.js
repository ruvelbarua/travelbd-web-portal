import React from 'react';
import About from '../About/About';
import AddService from '../AddService/AddService';
import AddUsers from '../AddUsers/AddUsers';
import MyOrders from '../MyOrders/MyOrders';
import Registration from '../Registration/Registration';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Registration></Registration>
            <About></About>
            <AddService></AddService>
            <AddUsers></AddUsers>
        </div>
    );
};

export default Home;