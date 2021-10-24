// Import React
import React, { useState, useHook } from 'react';
import Navigation from './Navigation';

const styles = {
    header: {
        lineHeight: "200px",
        background: "green"
    }
}

const Header = () => {
    return (
        <>
            <div className="container-fluid" style={styles.header}>
                <Navigation />
            </div>
        </>
    )
};

export default Header;