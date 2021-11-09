import React, {useState} from 'react';
import {Carousel, Container} from 'react-bootstrap';
import Cyber1 from './images/cyber1.jpg';
import Cyber2 from './images/cyber2.jpg';
import Cyber3 from './images/cyber3.jpeg';


const images = [
    { src: Cyber1, width: 600, height: 380 },
    { src: Cyber2, width: 400, height: 650 },
    { src: Cyber3, width: 300, height: 300 },
  ];


interface Props {
 
}

export const CustomCarousel: React.FC<Props> = () => {
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