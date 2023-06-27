import React from 'react';
import styles from './Footer.module.scss' 
import Navigation from '../Navigation/Navigation';
import MediaLinks from '../MediaLinks/MediaLinks';

const Footer = () => {
    return (
        <div className={styles.footerStyle}>
           <div>© Toy.Stream, Inc.</div>
           <Navigation className={styles.footerNav}/>
           <MediaLinks className={styles.footerIcons}/>
        </div>
    );
}

export default Footer;