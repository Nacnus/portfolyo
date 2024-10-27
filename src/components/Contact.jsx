import React from 'react';
import {Card, CardContent, IconButton, Typography} from "@mui/material";
import {IoIosMail} from "react-icons/io";
import {FaLinkedinIn} from "react-icons/fa6";

function Contact() {
    return (
        <Card id='contact' variant="outlined" className={'mb-5'}>
            <CardContent>
                <Typography
                    variant="h2"
                    className='d-flex justify-content-center'
                    fontWeight='bold'
                    component="div"
                >
                    İletişim
                </Typography>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography
                        className='d-block mt-2 mb-2 p-4 flex-column'
                        sx={{justifyItems: 'center'}}
                        variant='h6'
                        fontWeight='normal'
                        component="div"
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}>
                            <IconButton aria-label="mail" size='large' href='mailto:yusufcansun6@gmail.com'>
                                <IoIosMail fontWeight='100px' color='white'/>
                            </IconButton>
                        </div>
                        <Typography style={{marginLeft: '8px'}}>yusufcansun6@gmail.com</Typography>
                    </Typography>
                    <Typography
                        className='d-block mt-2 mb-2 p-4 flex-column'
                        sx={{justifyItems: 'center'}}
                        variant='h6'
                        fontWeight='normal'
                        component="div"
                    >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                        <IconButton
                            aria-label="linkedIn"
                            size='large'
                            href='https://www.linkedin.com/in/yusufcansun/'>
                            <FaLinkedinIn color='white'/>
                        </IconButton>
                    </div>
                    <Typography>linkedin.com/in/yusufcansun/</Typography>
                    </Typography>
                </div>


            </CardContent>
        </Card>
    );
}

export default Contact;
