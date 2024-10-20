import React, { useState } from 'react';
import { Container, Tabs, Tab } from "@mui/material";
import '../css/Header.css';  // Stil dosyanı koruyoruz

function Header() {
    const [value, setValue] = useState(0); // Aktif sekmeyi kontrol eden state

    const headers = [
        {
            section: 'home',
            title: 'Ana Sayfa'
        },
        {
            section: 'projects',
            title: 'Projeler'
        },
        {
            section: 'contact',
            title: 'İletişim'
        },
        {
            section: 'cv',
            title: 'CV'
        },
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);  // Aktif sekme değiştiğinde state güncellenir
    };

    return (
        <div className='header'>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' }}>
                <div className='left-text'>Yusuf Can Sun</div>
                <div>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="secondary"

                    >
                        {headers.map((header) => (
                            <Tab
                                key={header.section}
                                label={header.title}
                                href={'#' + header.section}  // Anchor link
                            />
                        ))}
                    </Tabs>
                </div>
            </Container>
        </div>
    );
}

export default Header;
