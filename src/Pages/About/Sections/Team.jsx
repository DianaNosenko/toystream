import React from 'react';
import Slider from '../../../Components/Sliders/TeamSlider/TeamSlider';
import styles from './Team.module.scss' 
import data from '../../../constants/data/team_data.json'

const Team = () => {

    const teamHeading = `Team_main_heading`;
    const sliderQuantity = 4;
    return (
        <div className={styles.teamWrap}>
            <Slider sliderStyles={styles.slider} sliderInfo={data} sliderHeading={teamHeading} sliderQuantity={sliderQuantity}
            />
        </div>
    );
}

export default Team;
