import React from 'react';
import { Carousel } from 'react-bootstrap';
import Simg1 from '../Pic/slider/fimg.jpg';
import Simg2 from '../Pic/slider/coxesbazer.jpg';
import Simg3 from '../Pic/slider/ctgcity.jpg';
import Simg4 from '../Pic/slider/ctghil.jpg';
import Simg5 from '../Pic/slider/dhkcity.jpg';
import Simg6 from '../Pic/slider/sban.jpg';
import Simg7 from '../Pic/slider/sylhet.jpg';
import Simg8 from '../Pic/slider/fotimg.jpg';

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
                    <h3>Welcome</h3>
                    <p>Vist Our Travel BD</p>
                    <p>Amazing Tour and Cheapest Organizer in Bangladesh</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>COXE'S BAZER</h3>
                    <p>World Largest Long Sea Beach in Bangladesh</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>CHATTOGRAM CITY</h3>
                    <p>Capital Business City in Bangladesh.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>CHATTOGRAM HILLTRACT</h3>
                    <p>Beautiful Hill Area in Bangladesh.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg5}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>DHAKA CITY</h3>
                    <p>Capital City and Best Heritage Places in Bangladesh.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg6}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>SUNDARBAN</h3>
                    <p>World Femous Largest Mangrove Area.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg7}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>SYLHET</h3>
                    <p>Best Natural Views and Tea Garden Situated in Bangladesh.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg8}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>VISIT MORE</h3>
                    <p>We are Best Tourism and Cheapest Tour Package Organize in Bangladesh.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;