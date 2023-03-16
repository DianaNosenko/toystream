import React from 'react';
import styles from './Footer.module.css' 
import Navigation from '../Navigation/Navigation';

const Footer = () => {
    return (
        <div className={styles.footerStyle}>
           <div>© Toy.Stream, Inc.</div>
           <Navigation className={styles.footerNav}/>
           <div>ICONS...</div>
        </div>
    );
}

export default Footer;