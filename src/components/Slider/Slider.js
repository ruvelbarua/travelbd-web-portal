import React from 'react';
import { Carousel } from 'react-bootstrap';
import Simg1 from '../Pic/slider/tbdslide.jpg';
import Simg2 from '../Pic/slider/coxesbazer.jpeg';
import Simg3 from '../Pic/slider/ctgcity.jpg';
import Simg4 from '../Pic/slider/ctghil.jpg';
import Simg5 from '../Pic/slider/dhkcity.jpg';
import Simg6 from '../Pic/slider/sban.jpg';
import Simg7 from '../Pic/slider/sylhet.jpg';
import Simg8 from '../Pic/slider/fotimg.jpg';
import Simg9 from '../Pic/slider/saintm.jpg';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg1}
                    alt="Welcome"
                />
                <Carousel.Caption>
                    <h5>Welcome</h5>
                    <h2>TRAVEL BD</h2>
                    <h5>Amazing Tour and Lowest Cost Organizer in Bangladesh</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2>COXE'S BAZER</h2>
                    <h5>World Largest Long Sea Beach in Bangladesh</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg9}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2>SAINTMARTIN</h2>
                    <h5>World Femous Sea Island in Bangladesh</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>CHATTOGRAM CITY</h2>
                    <h5>Capital Business City in Bangladesh.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>CHATTOGRAM HILLTRACT</h2>
                    <h5>Beautiful Hill Area in Bangladesh.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg5}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>DHAKA CITY</h2>
                    <h5>Capital City and Best Heritage Places in Bangladesh.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg6}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>SUNDARBAN</h2>
                    <h5>World Femous Largest Mangrove Area.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg7}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>SYLHET</h2>
                    <h5>Best Natural Views and Tea Garden Situated in Bangladesh.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg8}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>VISIT MORE</h2>
                    <h5>We are Best Tourism and Cheapest Tour Package Organize in Bangladesh.</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;