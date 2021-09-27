import React from 'react';
import './HiredProgrammer.css';

const HiredProgrammer = (props) => {
    const { name } = props.hiredProgrammer;


    return (
        <div>
            <p><strong>{name}</strong></p>
        </div>
    );
};




export default HiredProgrammer;