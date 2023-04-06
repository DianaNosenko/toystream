import React from 'react';
import Icons from '../Icons/Icons';
import styles from './Sidebar.module.css' 

const Sidebar = () => {
    return (
        <div className={styles.sidebarStyle}>
            <div className={styles.logoImage}>
                <img src="/logo.svg" alt="no image:(" />
            </div>
            <Icons className={styles.sidebarIcons}/>
        </div>
    );
}

export default Sidebar;