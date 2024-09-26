import React from 'react';
import '../css/Header.css';
import {Button} from "@mui/material";


function Header() {
    return (
        <div className='header'>
            <div className='left-text'>Yusuf Can Sun</div>
            <div className='right-buttons'>
                <Button variant="contained" disableElevation>Contained</Button>
                <Button variant="contained" disableElevation>Contained</Button>
                <Button size="small" variant="contained" disableElevation>Contained</Button>
            </div>
        </div>
    );
}

export default Header;
