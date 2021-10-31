import React from 'react';
import About from '../About/About';
import AddUsers from '../AddUsers/AddUsers';
import Registration from '../Registration/Registration';
import Services from '../Services/Services';
import Users from '../Users/Users';

const Home = () => {
    return (
        <div>
            <Users></Users>
            <AddUsers></AddUsers>
            <Services></Services>
            <About></About>
            <Registration></Registration>
        </div>
    );
};

export default Home;