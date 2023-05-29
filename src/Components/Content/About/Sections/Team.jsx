import React from 'react';
import Slider from '../../Slider/Slider';
import styles from './Team.module.scss' 

const Team = () => {
    const sliderInfo = [];

    return (
        <div className={styles.teamWrap}>
            <Slider sliderInfo={sliderInfo}/>
        </div>
    );
}

export default Team;
