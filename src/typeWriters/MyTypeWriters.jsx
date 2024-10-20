import Typewriter from 'typewriter-effect';
import React from 'react';

function MyTypeWriters() {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
}

export default MyTypeWriters;

