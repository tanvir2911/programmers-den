import React from 'react';
import './Programmer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Programmer = (props) => {
    // console.log(props)
    const { name, awards, contribution, salary, image, profession } = props.programmer;

    return (
        <div className="programmer">
            <div className="image-div">
                <img className="image" src={image} alt="" />
            </div>
            <div className="programmer-details">
                <h4 style={{ fontSize: "24px" }}><i>{name}</i></h4>
                <p><strong>Profession: </strong>{profession}</p>
                <p><strong>Contribution: </strong>{contribution}</p>
                <p><strong>Awards: </strong>{awards}</p>
                <p><strong>Salary: </strong>${salary}</p>
            </div>
            <div>
                <button
                    onClick={() => props.handleAddProgrammer(props.programmer)
                    }><FontAwesomeIcon icon={faUserPlus} /> Hire Me</button>
            </div>
        </div>

    );
};

export default Programmer;