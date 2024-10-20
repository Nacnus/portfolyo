import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

function Home() {
    return (
        <Card id='home' className='mx-5 mt-4 mb-3' elevation={3}>
            <CardContent >
                <Typography gutterBottom component='div' variant='h4'>Merhaba, ben Yusuf</Typography>
                <Typography>Front-end geliştirici modern web teknolojileriyle kullanıcı dostu çözümler üretiyorum.</Typography>
                <Typography>
                    Ben bir front-end geliştirici olarak, kullanıcı deneyimini ön planda tutan ve estetik açıdan güçlü
                    web
                    arayüzleri oluşturma konusunda tutkuluyum. React, Vue ve Nuxt.js gibi modern framework'ler ve
                    kütüphanelerle çalışarak, performans odaklı ve ölçeklenebilir çözümler geliştiriyorum. Sürekli
                    değişen
                    teknolojik dünyada kendimi güncel tutmak için yeni teknikler ve trendleri takip ediyorum.
                    Projelerimde
                    yazılımın her aşamasında en iyi uygulamaları kullanmaya özen gösteriyor, detaylara önem veriyor ve
                    kullanıcı odaklı çözümler üretmeye çalışıyorum.
                </Typography>
            </CardContent>

        </Card>
    );
}

export default Home;
