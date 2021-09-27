import React, { useEffect, useState } from 'react';
import './Programmers.css'
import Programmer from '../Programmer/Programmer';
import HiredProgrammers from '../Hired-Programmers/HiredProgrammers';


const Programmers = () => {
    const [programmers, setProgrammers] = useState([]);
    const [hiredProgrammers, setHiredProgrammers] = useState([]);
    const [cost, setCost] = useState(0)

    let total = 0;
    const handleAddProgrammer = programmer => {
        const newProgrammer = [...hiredProgrammers, programmer];
        setHiredProgrammers(newProgrammer);
        total = cost + programmer.salary;
        setCost(total)
    }

    useEffect(() => {
        fetch('./programmers.json')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])

    return (
        <div>
            <div>
                <h2 id="programmersHeadng">Here are my programmers</h2>
            </div>
            <div className="programmers">
                <div className="programmers-cards">
                    {
                        programmers.map(programmer => <Programmer
                            key={programmer.id}
                            programmer={programmer}
                            handleAddProgrammer={handleAddProgrammer}
                        />)
                    }
                </div>
                <div>
                    <HiredProgrammers
                        numberOfHiredProgrammers={hiredProgrammers.length}
                        cost={cost}
                        hiredProgrammers={hiredProgrammers}
                    />
                </div>
            </div>
        </div>
    );
};

export default Programmers;