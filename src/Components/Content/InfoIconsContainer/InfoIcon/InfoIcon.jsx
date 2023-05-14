import React from 'react';
import styles from'./InfoIcon.module.scss';

const InfoIcon = () => {
    
    return (
        <div>
            <div className={styles.iconContainer}>
                <img src="/InfoIcons/Flag-Icon.svg" alt="" />
            </div>
            <div className={styles.animatedFone}></div>
            <h2></h2>
            <h4></h4>
        </div>
    );
}

export default InfoIcon;
