import React from 'react';
import {Button, Card, CardActions, CardContent, IconButton, Typography} from "@mui/material";
import { IoMdDownload } from "react-icons/io";


function AboutMe() {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `Yusuf Can Sun.pdf`;
        link.href = "../Cv/Cv.pdf";
        link.click();
    };
    return (
        <Card id='aboutMe' elevation={4}>
            <CardContent>
                <Typography
                    variant="h2"
                    className='d-flex justify-content-center'
                    fontWeight='bold'
                    component="div"
                >
                    Hakkımda
                </Typography>

                <Typography
                    variant="h5"
                    className='d-flex justify-content-center'
                    fontWeight='lighter'
                    component="caption"
                >
                    Front-end Developer
                </Typography>

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

            <CardActions className='d-flex justify-content-center mb-4'>
                <Button
                    onClick={onDownload}
                    component='label'
                    variant="contained"
                    color='secondary'
                    size='large'
                    startIcon={<IoMdDownload />}
                >
                    Cv İndirmek İçin Tıklayın
                </Button>
            </CardActions>

        </Card>
    );
}

export default AboutMe;
