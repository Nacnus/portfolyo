import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "../pages/Home.jsx";
import Projects from "../pages/Projects.jsx";
import {Container} from "@mui/material";
import Contact from "../pages/Contact.jsx";

function RouterConfig() {
    return (
         <Container fixed>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
         </Container>
    );
}

export default RouterConfig;
