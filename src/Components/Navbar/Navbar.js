import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Nabvar__content">
            <div className="logo__">
                <text className="text">TK</text>
            </div>
            <div className="nav__links">
                <ul>
                    <li id="active">Home</li>
                    <li>Project</li>
                    <li>Skills</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="hamburger__menu">
                <div className="icon" />
                <div className="icon" />
                <div className="icon" />
            </div>
        </div>
    )
}

export default Navbar;
