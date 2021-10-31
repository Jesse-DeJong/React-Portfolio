// Import React
import React from 'react';
import Navigation from './Navigation';

const styles = {
    header: {
        lineHeight: "200px",
        backgroundImage: `url("https://background-tiles.com/overview/mixed-colors/patterns/large/1090.png")`
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