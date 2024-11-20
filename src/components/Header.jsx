import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery } from '@mui/material';
import { CiMenuBurger } from "react-icons/ci";

import '../css/Header.css';

function Header() {
    const [value, setValue] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust breakpoint as needed

    const headers = [
        { section: 'home', title: 'Ana Sayfa' },
        { section: 'aboutMe', title: 'Hakkımda' },
        { section: 'projects', title: 'Projeler' },
        { section: 'contact', title: 'İletişim' },
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            headers.forEach((header, index) => {
                const section = document.getElementById(header.section);
                if (section) {
                    const sectionTop = section.offsetTop - 120;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setValue(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const mobileMenu = (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
                {headers.map((header, index) => (
                    <ListItem key={header.section} disablePadding>
                        <ListItemButton
                            href={`#${header.section}`}
                            onClick={() => {
                                setValue(index);
                                setDrawerOpen(false);
                            }}
                        >
                            <ListItemText primary={header.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );

    return (
        <div className='header'>
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: isMobile ? '10px' : '20px 0',
                }}
            >
                <a
                    href="#home"
                    className="left-text"
                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', fontSize: isMobile ? '1.2rem' : '1.5rem' }}
                >
                    Yusuf Can Sun
                </a>
                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={toggleDrawer(true)}
                            aria-label="menu"
                        >
                            <CiMenuBurger />
                        </IconButton>
                        {mobileMenu}
                    </>
                ) : (
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="secondary"
                        sx={{ paddingTop: '12px' }}
                    >
                        {headers.map((header) => (
                            <Tab key={header.section} label={header.title} href={`#${header.section}`} />
                        ))}
                    </Tabs>
                )}
            </Container>
        </div>
    );
}

export default Header;
