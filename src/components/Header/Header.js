import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Hire Programmers</h1>
            <h3>Select the best programmers in the world to make your life easier</h3>
            <p id="total-budget">Total Budget: <span id="budget-dollars">$5000000</span></p>
        </div>
    );
};

export default Header;