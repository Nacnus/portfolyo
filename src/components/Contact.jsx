import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { IoIosMail } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import ContactForm from "./ContactForm.jsx";

function Contact() {
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <Card id='contact' variant="outlined" className={'mb-5 rounded-4'}>
            <CardContent>
                <Typography
                    variant="h2"
                    className='d-flex justify-content-center mb-3'
                    fontWeight='bold'
                    component="div"
                >
                    İletişim
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    {/* Mail Icon Button */}
                    <div
                        onMouseEnter={() => setHoveredButton('mail')}
                        onMouseLeave={() => setHoveredButton(null)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '10px',
                            filter: hoveredButton && hoveredButton !== 'mail' ? 'blur(2px)' : 'none',
                            transition: 'filter 0.3s',
                        }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: hoveredButton === 'mail' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)',
                            transition: 'background-color 0.3s',
                        }}>
                            <IconButton aria-label="mail" size='large' href='mailto:yusufcansun6@gmail.com'>
                                <IoIosMail color='white' />
                            </IconButton>
                        </div>
                        <Typography component='a' href='mailto:yusufcansun6@gmail.com' style={{ marginTop: '8px',textDecoration:'none', color: hoveredButton === 'mail' ? '#000' : '#555' }}>
                            yusufcansun6@gmail.com
                        </Typography>
                    </div>

                    {/* LinkedIn Icon Button */}
                    <div
                        onMouseEnter={() => setHoveredButton('linkedin')}
                        onMouseLeave={() => setHoveredButton(null)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '10px',
                            filter: hoveredButton && hoveredButton !== 'linkedin' ? 'blur(2px)' : 'none',
                            transition: 'filter 0.3s',
                        }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: hoveredButton === 'linkedin' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)',
                            transition: 'background-color 0.3s',
                        }}>
                            <IconButton
                                aria-label="linkedIn"
                                size='large'
                                href='https://www.linkedin.com/in/yusufcansun/'>
                                <FaLinkedinIn color='white' />
                            </IconButton>
                        </div>
                        <Typography component='a' href='https://www.linkedin.com/in/yusufcansun/' style={{ marginTop: '8px',textDecoration:'none', color: hoveredButton === 'linkedin' ? '#000' : '#555' }}>
                            linkedin.com/in/yusufcansun/
                        </Typography>
                    </div>
                </div>
            </CardContent>
            <ContactForm/>
        </Card>
    );
}

export default Contact;
