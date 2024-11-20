import React from 'react';
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import MyTypeWriters from "../typeWriters/MyTypeWriters.jsx";
import PageContainer from "../container/PageContainer.jsx";
import bgImage from "../images/backgroundImage.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useMediaQuery } from '@mui/material';

function Home() {
    const isMobile = useMediaQuery('(max-width: 600px)'); // Mobil ekran kontrolü

    return (
        <Card id='home'
              elevation={3}
              className={'rounded-bottom-4 rounded-top-0'}
              sx={{
                  backgroundImage: `url(${bgImage})`,
                  height: '80dvh',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
              }}>
            <PageContainer>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '200px',
                    position: 'relative',
                    zIndex: 1,
                    padding: '0 20px' // Add padding for better mobile spacing
                }}>
                    <Typography
                        gutterBottom
                        component='div'
                        variant='h2'
                        color='white'
                        fontWeight='bolder'
                        sx={{
                            textAlign: 'center', // Center align for mobile
                            fontFamily: '"Montserrat", sans-serif' // Montserrat font family
                        }}
                    >
                        Merhaba
                    </Typography>
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row', // Mobilde alt alta, masaüstünde yan yana
                        alignItems: 'center',  // Center align for mobile and desktop
                        textAlign: 'center',
                    }}>
                        <Typography variant='h2' color='white' sx={{
                            fontFamily: '"Montserrat", sans-serif' // Montserrat font family for 'Ben'
                        }}>
                            Ben
                        </Typography>
                        <Typography variant='h2' fontWeight='500' color='white' sx={{
                            marginTop: isMobile ? 2 : 0,
                            fontFamily: '"Montserrat", sans-serif' // Montserrat font family for typewriter
                        }}>
                            {/* MyTypeWriters bileşeni burada animasyonlu yazıyı gösterir */}
                            <MyTypeWriters />
                        </Typography>
                    </div>
                </CardContent>
            </PageContainer>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            />

            {/* IconButton'ları sabitleme kısmı */}
            <div style={{
                position: isMobile ? 'absolute' : 'relative', // Sadece mobilde sabit
                bottom: isMobile ? '20px' : 'initial', // Sadece mobilde alt kısımda
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '15px',
                flexDirection: 'row', // Masaüstü ve mobilde yatay düzen
                justifyContent: 'center', // Ortalamak için
                width: '100%',
                padding: isMobile ? '0 20px' : 'initial', // Mobilde boşluk bırak
            }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }}>
                    <IconButton
                        aria-label="linkedIn"
                        size='normal'
                        href='https://www.linkedin.com/in/yusufcansun/'>
                        <FaLinkedinIn color='white' />
                    </IconButton>
                </div>

                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }}>
                    <IconButton aria-label="mail" size='normal' href='mailto:yusufcansun6@gmail.com'>
                        <IoIosMail color='white' />
                    </IconButton>
                </div>
            </div>
        </Card>
    );
}

export default Home;
