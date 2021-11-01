import React from 'react';
import { Card } from 'react-bootstrap';
import bnrimg from '../Pic/banner.jpg';
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img className="bnr-size" src={bnrimg} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>

                    </Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;