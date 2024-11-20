import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function MyTypeWriters() {

    const titles = [' Yusuf Can Sun', ' Front-end Developer\'ım'];


    return (
        <div>
            <span>
                <Typewriter
                    words={titles}
                    loop={true}
                    cursor
                    typeSpeed={30}
                    deleteSpeed={30}
                    delaySpeed={3000}
                />
            </span>
        </div>
    );
}

export default MyTypeWriters;
