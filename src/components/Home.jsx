import React from 'react';
import {Card, CardContent, IconButton, Typography} from "@mui/material";
import MyTypeWriters from "../typeWriters/MyTypeWriters.jsx";
import PageContainer from "../container/PageContainer.jsx";
import bgImage from "../images/backgroundImage.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Home() {
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
                }}>
                    <Typography
                        gutterBottom
                        component='div'
                        variant='h2'
                        color='white'
                        fontWeight='bolder'
                    >
                        Merhaba
                    </Typography>
                    <div style={{display: 'flex', alignItems: 'baseline'}}>
                        <Typography variant='h2' color='white'>
                            Ben
                        </Typography>
                        <Typography variant='h2' fontWeight='normal' color='white' sx={{marginLeft: 1}}>
                            <MyTypeWriters/>
                        </Typography>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginTop: '20px'
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
                                <FaLinkedinIn color='white'/>
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
                                <IoIosMail color='white'/>
                            </IconButton>
                        </div>
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

        </Card>
    );
}

export default Home;
