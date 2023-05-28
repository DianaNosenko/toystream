import React from 'react';
import styles from './Footer.module.scss' 
import Navigation from '../Navigation/Navigation';
import Icons from '../Icons/Icons';

const Footer = () => {
    return (
        <div className={styles.footerStyle}>
           <div>© Toy.Stream, Inc.</div>
           <Navigation className={styles.footerNav}/>
           <Icons className={styles.footerIcons}/>
        </div>
    );
}

export default Footer;