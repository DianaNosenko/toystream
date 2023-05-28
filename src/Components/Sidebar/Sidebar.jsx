import React from 'react';
import Icons from '../Icons/Icons';
import styles from './Sidebar.module.css' 

const Sidebar = () => {
    return (
        <div className={styles.sidebarStyle}>
            <Icons className={styles.sidebarIcons}/>
        </div>
    );
}

export default Sidebar;