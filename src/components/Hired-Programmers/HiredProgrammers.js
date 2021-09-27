import React from 'react';
import HiredProgrammer from '../HiredProgrammer/HiredProgrammer';
import './HiredProgrammers.css'

const HiredProgrammers = (props) => {

    return (
        <div>
            <h4>Hired Programmers: {props.numberOfHiredProgrammers}</h4>
            <p>Total Costs: {props.cost}</p>
            <div>
                {props.hiredProgrammers.map(hiredProgrammer => <HiredProgrammer
                    key={hiredProgrammer.id * Math.random()}
                    hiredProgrammer={hiredProgrammer}
                />)
                }
            </div>

        </div>
    );
};

export default HiredProgrammers;