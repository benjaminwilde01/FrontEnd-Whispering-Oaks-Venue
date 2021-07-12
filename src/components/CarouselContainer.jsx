import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'


const CarouselContainer = () => {
    return (
        <Carousel id="gallery">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ image2 }
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ image1 }
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ image3 }
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer
