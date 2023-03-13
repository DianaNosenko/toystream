import React from 'react';
import styles from './Header.module.css' 

const Header = () => {
    return (
        <div className={styles.headerStyle}>
            <div className={styles.headerNav}>
                <a href="/home">Home</a>
                <a href="/about-us">About us</a>
                <a href="/games">Games</a>
                <a href="/career">Career</a>
                <a href="/news">News</a>
                <a href="/contact-us">Contact us</a>
            </div>
            <button className={styles.headerButton}>eng</button>
        </div>
    );
}

export default Header;