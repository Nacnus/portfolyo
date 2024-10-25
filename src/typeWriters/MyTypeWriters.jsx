import React from 'react';
import {Typewriter} from "react-simple-typewriter";


function MyTypeWriters() {
    const titles=[
        'Yusuf Can Sun',
        'Front-end Developer'
    ]
    return (
        <>
                <Typewriter
                    words={titles}
                    loop={true}
                    cursorBlinking={false}
                    cursor
                    typeSpeed={30}
                    deleteSpeed={30}
                    delaySpeed={3000}
                />
        </>
    );
}

export default MyTypeWriters;

