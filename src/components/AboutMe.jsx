import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import { IoMdDownload } from "react-icons/io";
import cvFile from "../Cv/Cv.pdf"
import photo from "../images/photo.jpeg"

function AboutMe() {
    return (
        <Card id='aboutMe' elevation={4} className={'rounded-4'}>
            <CardContent>
                <div style={{
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    marginTop:'20px'
                }}>
                    <div>
                        <img
                            src={photo}
                            alt="Yusuf Can Sun"
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                justifyContent: 'start',
                                alignSelf: 'flex-start',
                                marginLeft: '15px',
                                border: '2px solid rgba(0,0,0,0.5)'  // Add this line for a thin black border
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                        marginRight: '150px'
                    }}>
                        <Typography
                            variant="h2"
                            fontWeight="bold"
                            component="div"
                            style={{textAlign: 'center'}}
                        >
                            Hakkımda
                        </Typography>

                        <Typography
                            variant="h5"
                            fontWeight="lighter"
                            component="caption"
                            style={{textAlign: 'center'}}
                        >
                            Front-end Developer
                        </Typography>
                    </div>
                </div>
                <Typography
                    className='d-flex justify-content-start mt-2 mb-2 p-4'
                    variant='h6'
                    fontWeight='normal'
                    component="p"

                >
                    Merhaba! Ben Yusuf Can Sun, Front-end geliştirici olarak
                    kullanıcı odaklı ve estetik arayüzler
                    geliştirmeyi amaçlayan bir yazılım geliştiricisiyim. Manisa Celal Bayar Üniversitesi’nde Bilgisayar
                    Programcılığı bölümünde eğitimime devam ediyor, SEBIT ve SPP42 firmalarındaki staj deneyimlerimden
                    edindiğim tecrübeleri projelerime yansıtıyorum.<br/><br/>
                    React, Redux, Vue ve Nuxt.js gibi modern web teknolojilerini
                    kullanarak işlevsel ve güçlü kullanıcı deneyimleri sunan uygulamalar geliştirmeye odaklanıyorum.
                    <br/><br/>
                    Eğer kullanıcı odaklı ve yaratıcı çözümler üreten bir front-end geliştirici arıyorsanız,
                    projelerinizde birlikte çalışmaktan mutluluk duyarım!
                </Typography>
            </CardContent>

            <CardActions className='d-flex justify-content-center mb-4 '>
                <Button
                    href={cvFile}
                    download="Yusuf Can Sun.pdf"
                    component='a'
                    variant="contained"
                    className={'rounded-4'}
                    color='secondary'
                    size='large'
                    startIcon={<IoMdDownload/>}
                >
                    Cv İndirmek İçin Tıklayın
                </Button>
            </CardActions>

        </Card>
    );
}

export default AboutMe;
