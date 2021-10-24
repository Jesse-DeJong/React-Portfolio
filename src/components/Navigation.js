// Import React
import React, { useState, useHook } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const styles = {
    listItems: {
        display: "inline-block",
        padding: "0px 20px",
        fontSize: "30px"
    },
    developer: {
        display: "inline-block",
        fontSize: "80px",
        fontFamily: "copperplate"
    }
}

const Navigation = () => {
    return (
<>
    <div className="container-fluid d-flex justify-content-between align-items-center">
        <ul className="d-flex">
            <li style={styles.developer}>
                Lernantino
            </li>
        </ul>
        
        <ul className="nav nav-tabs d-flex justify-content-evenly">
            <li className="nav-item">
                <NavLink to="/about" style={styles.listItems} activeClassName="selected">About Me</NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/portfolio" style={styles.listItems} activeClassName="selected">Portfolio</NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/contact" style={styles.listItems} activeClassName="selected">Contact</NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/resume" style={styles.listItems} activeClassName="selected">Resume</NavLink>
            </li>
        </ul>
    </div>

    {/* Switch Case for conditional rendering of each page */}

</>
    );
}

export default Navigation;