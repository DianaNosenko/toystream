import React, {useState} from 'react';
import styles from './LastProjects.module.scss' 
import data from './../OurWorks/games_data.json';
import GamesSlider from '../../../../GamesSlider';
import LastProjectPopup from '../../../../LastProjectPopup';

const LastProjects = () => {
    const [active, setActive] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0)
    const worksSliderHeading = `Games_Slider_Heading`;
    return (
        <div className={styles.wrap}>
               <GamesSlider 
                sliderStyles={styles.slider} 
                sliderInfo={data} 
                sliderHeading={worksSliderHeading} 
                setActiveSlide={setActiveSlide}
                setActive={setActive}
                />
                <LastProjectPopup 
                active={active} 
                setActive={setActive} 
                sliderInfo={data}
                activeSlide={activeSlide}
                />
        </div>
    );
}

export default LastProjects;

