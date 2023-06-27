import React from 'react';
import MediaLinks from '../MediaLinks/MediaLinks';
import styles from './Sidebar.module.css' 

const Sidebar = () => {
    return (
        <div className={styles.sidebarStyle}>
            <MediaLinks className={styles.sidebarIcons}/>
        </div>
    );
}

export default Sidebar;