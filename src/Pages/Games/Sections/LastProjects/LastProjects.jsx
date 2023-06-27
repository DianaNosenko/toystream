import React from 'react';
import styles from './LastProjects.module.scss' 
import data from '../../../../constants/data/games_data.json';
import GamesSlider from '../../../../Components/Sliders/GameSlider/GamesSlider';
import GamesPopup from '../../../../Components/Popups/GamesPopup/GamesPopup';

const LastProjects = () => {
 
    const worksSliderHeading = `Games_Slider_Heading`;
    return (
        <div className={styles.wrap}>
            <GamesSlider 
            sliderStyles={styles.slider} 
            sliderInfo={data} 
            sliderHeading={worksSliderHeading} 
            />
            <GamesPopup 
            sliderInfo={data}
            />
        </div>
    );
}

export default LastProjects;

