import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import { Container, Collapse, CardBody, Card, CardHeader} from 'reactstrap';
import Cyber1 from './images/cyber1.jpg';
import Cyber2 from './images/cyber2.jpg';
import Cyber3 from './images/cyber3.jpeg';
import test from './images/squarepopup.png';


const images = [
    { src: Cyber1, width: 600, height: 380 },
    { src: Cyber2, width: 400, height: 650 },
    { src: Cyber3, width: 300, height: 300 },
  ];


interface Props {
 
}

export const CustomCarousel: React.FC<Props> = () => {
    const [toggleQuestion, setToggequestion] = useState(1);


    return (
        <Container>
            <Carousel className="carousel-inner">
                {images.map((img) => (
                    <Carousel.Item className="item">
                    <img
                    className="d-block img-fluid"
                    src={img.src}
                    alt="First slide"
                    />
                </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    )
}