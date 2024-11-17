import React from 'react';
import '../css/MyCarousel.css'
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import {Carousel} from "react-bootstrap";
import {CiCircleChevLeft, CiCircleChevRight} from "react-icons/ci";
import {Card, Typography} from "@mui/material";


function MyCarousel() {
    return (
        <Card className="carousel-container" style={{overflow:'visible'}} id='projects' elevation={3}>
            <Typography
                variant="h2"
                fontWeight="bold"
                component="div"
                className="pt-4"
                style={{textAlign: 'center'}}
            >
                Projeler
            </Typography>
            <Carousel
                prevIcon={<CiCircleChevLeft color='#FF9100FF' fontSize='300%' />}
                nextIcon={<CiCircleChevRight color='#FF9100FF' fontSize='300%'  />}
                className="mt-4"
            >
                <Carousel.Item>
                    <a href="https://github.com/Nacnus/linkedIn-clone" target="_self">
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption  className='carousel-caption-custom'>
                            <h3>Klon LinkedIn Projesi</h3>
                            {/* eslint-disable-next-line react/no-unknown-property */}
                            <p align='left' style={{textIndent: '20px', marginTop: '0'}}> Vue.js, Nuxt.js ve Vuetify
                                kullanarak geliştirdiğim bu LinkedIn klonunda, gönderi paylaşma, beğeni, yorum yapma,
                                profil oluşturma ve diğer profilleri görüntüleme gibi özellikler bulunmaktadır. Backend
                                entegrasyonunu bir geliştiriciyle birlikte tamamlayarak ekip çalışması becerilerimi
                                geliştirdim. Görseller ve kodlar için buraya tıklayın.
                            </p>
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
                            <p align='left' style={{textIndent: '20px', marginTop: '0'}}>
                                Vue.js, Nuxt.js ve Vuetify kullanarak geliştirdiğim bu e-ticaret sitesinde, ürünleri
                                sepete ekleme, ürün ekleme, puanlama, arama, kategorilere göre listeleme ve yorum yapma
                                gibi özellikler bulunmaktadır. Backend entegrasyonunu bir geliştiriciyle iş birliği
                                içinde tamamlayarak ekip çalışması becerilerimi geliştirdim. Görseller ve kodlar için
                                buraya tıklayın.
                            </p>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://github.com/Nacnus/portfolyo" target="_self">
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='carousel-caption-custom'>
                            <h3>Portfolyo Sitesi</h3>
                            <p align='left' style={{textIndent: '20px', marginTop: '0'}}>
                                React, React-Bootstrap ve Material UI kullanarak kendime bir portfolyo sitesi
                                geliştirdim. Bu web sitesi; projeler, hakkında ve iletişim bölümlerinden oluşmaktadır.
                                İletişim formunda Firebase entegrasyonu kullanılmıştır. Kodlar için buraya tıklayın.
                            </p>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
            </Carousel>
        </Card>
    );
}

export default MyCarousel;
