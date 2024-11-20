import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { IoIosMail } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import ContactForm from "./ContactForm.jsx";

function Contact() {
    const [hoveredButton, setHoveredButton] = useState(null);

    // Common styles for buttons and hover effects
    const buttonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        transition: 'background-color 0.3s, transform 0.3s',
    };

    const iconButtonStyle = (buttonType) => ({
        backgroundColor: hoveredButton === buttonType ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)',
        transform: hoveredButton === buttonType ? 'scale(1.2)' : 'scale(1)',
    });

    const textStyle = (buttonType) => ({
        marginTop: '8px',
        color: hoveredButton === buttonType ? '#000' : '#555',
        textDecoration: 'none',
    });

    return (
        <Card id='contact' className={'mb-5 rounded-4'} elevation={4}>
            <CardContent>
                <Typography
                    variant="h2"
                    className="contact-heading d-flex justify-content-center mb-3"
                    fontWeight="bold"
                    component="div"
                >
                    İletişim
                </Typography>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <div
                        onMouseEnter={() => setHoveredButton('mail')}
                        onMouseLeave={() => setHoveredButton(null)}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}
                    >
                        <div style={{ ...buttonStyle, ...iconButtonStyle('mail') }}>
                            <IconButton aria-label="mail" size="large" href="mailto:yusufcansun6@gmail.com">
                                <IoIosMail color="white" />
                            </IconButton>
                        </div>
                        <Typography component="div" variant="h5" style={textStyle('mail')}>
                            E-Posta
                        </Typography>
                        <Typography component='a' href='mailto:yusufcansun6@gmail.com' style={textStyle('mail')}>
                            yusufcansun6@gmail.com
                        </Typography>
                    </div>

                    {/* LinkedIn Icon Button */}
                    <div
                        onMouseEnter={() => setHoveredButton('linkedin')}
                        onMouseLeave={() => setHoveredButton(null)}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}
                    >
                        <div style={{ ...buttonStyle, ...iconButtonStyle('linkedin') }}>
                            <IconButton
                                aria-label="linkedIn"
                                size="large"
                                href="https://www.linkedin.com/in/yusufcansun/"
                            >
                                <FaLinkedinIn color="white" />
                            </IconButton>
                        </div>
                        <Typography component="div" variant="h5" style={textStyle('linkedin')}>
                            LinkedIn
                        </Typography>
                        <Typography component='a' href='https://www.linkedin.com/in/yusufcansun/' style={textStyle('linkedin')}>
                            linkedin.com/in/yusufcansun/
                        </Typography>
                    </div>

                </div>
            </CardContent>
            <ContactForm />
        </Card>
    );
}

export default Contact;
