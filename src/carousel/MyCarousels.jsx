import React from 'react';
import '../css/MyCarousel.css'
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import {Carousel} from "react-bootstrap";
import {CiCircleChevLeft, CiCircleChevRight} from "react-icons/ci";
import {Card} from "@mui/material";


function MyCarousel() {
    return (
        <Card className="carousel-container" style={{overflow:'visible'}} id='projects' elevation={3}>
            <Carousel
                prevIcon={<CiCircleChevLeft color='#FF9100FF' fontSize='300%' />}
                nextIcon={<CiCircleChevRight color='#FF9100FF' fontSize='300%'  />}
                className="mt-5"
            >
                <Carousel.Item>
                    <a href="https://github.com/Nacnus/linkedIn-clone" target="_self">
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='carousel-caption-custom'>
                            <h3>Clone LinkedIn Projesi</h3>
                            <p>Bu projede Linkedin'in clonenunu yaptım.</p>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://github.com/Nacnus/e-commerce-nuxt" target="_self">
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />
                        <Carousel.Caption className='carousel-caption-custom'>
                            <h3>E-Ticaret Projesi</h3>
                            <p>Kendi E-ticaret sitemi yaptım.</p>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
            </Carousel>
        </Card>
);
}

export default MyCarousel;
