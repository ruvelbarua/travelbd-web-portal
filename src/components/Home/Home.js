import React from 'react';
import About from '../About/About';
import Registration from '../Registration/Registration';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <About></About>
            <Registration></Registration>
        </div>
    );
};

export default Home;