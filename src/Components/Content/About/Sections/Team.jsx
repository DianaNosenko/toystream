import React from 'react';
import Slider from '../../Slider/Slider';
import styles from './Team.module.scss' 
import { useTranslation } from 'react-i18next';

const Team = () => {
    const {t} = useTranslation();

    const teamHeading = `Team_main_heading`;
    const sliderInfo = [];
    for (let i = 1; i <= 4; i++){
            sliderInfo.push({
                picture: `/TeamPictures/Team_${i}.svg`,
                heading: `Team_heading_${i}`,
                subheading: `Team_subheading_${i}`,
                description: `Team_description_${i}`
            })
    }    

    return (
        <div className={styles.teamWrap}>
            <Slider className={styles.slider} sliderInfo={sliderInfo} teamHeading={teamHeading}/>
        </div>
    );
}

export default Team;
