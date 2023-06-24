import React from 'react';
import Slider from '../../Slider/Slider';
import styles from './Team.module.scss' 

const Team = () => {

    const teamHeading = `Team_main_heading`;
    const sliderQuantity = 4;
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
            <Slider sliderStyles={styles.slider} sliderInfo={sliderInfo} sliderHeading={teamHeading} sliderQuantity={sliderQuantity}/>
        </div>
    );
}

export default Team;
