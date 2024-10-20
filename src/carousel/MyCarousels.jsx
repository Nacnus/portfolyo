import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/MyCarousel.css'
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';



function MyCarousel() {
    return (
        <div className="carousel-container" id='projects'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Clone LinkedIn Projesi</h3>
                        <p>Bu projede Linkedin'in clonenunu yaptım.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>E-Ticaret Projesi</h3>
                        <p>Kendi E-ticaret sitemi yaptım.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MyCarousel;
