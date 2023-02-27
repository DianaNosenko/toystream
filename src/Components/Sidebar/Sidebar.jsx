import React from 'react';
import styles from './Sidebar.module.css' 

const Sidebar = () => {
    return (
        <div className={styles.sidebarStyle}>
            <div className={styles.logoImage}>
                <img src="/logo.svg" alt="no image:(" />
            </div>
            <div className={styles.icons}>
                <a href="#"><img src="/icons/Pinterest.svg" alt="" /></a>
                <a href="#"><img src="/icons/Behance.svg" alt="" /></a>
                <a href="#"><img src="/icons/Dribbble.svg" alt="" /></a>
                <a href="#"><img src="/icons/Snapchat.svg" alt="" /></a>
                <a href="#"><img src="/icons/Linkedin.svg" alt="" /></a>
                <a href="#"><img src="/icons/Facebook.svg" alt="" /></a>
            </div>
        </div>
    );
}

export default Sidebar;