import React from 'react';
import About from '../About/About';
import Registration from '../Registration/Registration';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <About></About>
            <Registration></Registration>
        </div>
    );
};

export default Home;