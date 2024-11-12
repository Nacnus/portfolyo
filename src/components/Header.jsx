import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab } from "@mui/material";
import '../css/Header.css';

function Header() {
    const [value, setValue] = useState(0);

    const headers = [
        {
            section: 'home',
            title: 'Ana Sayfa'
        },
        {
            section: 'aboutMe',
            title: 'Hakkımda'
        },
        {
            section: 'projects',
            title: 'Projeler'
        },
        {
            section: 'contact',
            title: 'İLETİŞİM'
        },
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            headers.forEach((header, index) => {
                const section = document.getElementById(header.section);
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setValue(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='header'>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href={"#home"} className="left-text" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
                    Yusuf Can Sun
                </a>
                <div>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="secondary"
                        sx={{paddingTop:'12px'}}
                    >
                        {headers.map((header) => (
                            <Tab key={header.section} label={header.title} href={`#${header.section}`} />
                        ))}
                    </Tabs>
                </div>
            </Container>
        </div>
    );
}

export default Header;
