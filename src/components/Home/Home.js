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
            <Registration></Registration>
            <About></About>
        </div>
    );
};

export default Home;