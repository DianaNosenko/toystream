import React from 'react';
import styles from './Header.module.css' 
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className={styles.headerStyle}>
            <Navigation className={styles.headerNav}/>
            <button className={styles.headerButton}>eng</button>
        </div>
    );
}

export default Header;