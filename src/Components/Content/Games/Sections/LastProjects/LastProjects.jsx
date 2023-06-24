import React, {useState} from 'react';
import styles from './LastProjects.module.scss' 
import Slider from './../../../Slider/Slider'
import { useTranslation } from 'react-i18next';
import RedButton from '../../../../RedButton/RedButton';
import Popup from '../../../../Popup/Popup';

const LastProjects = () => {
    const {t} = useTranslation();
    const [active, setActive] = useState(false);

    const teamHeading = `Team_main_heading`;
    const sliderQuantity = 3;
    const isButtonExist = true;
    const sliderInfo = [];
    for (let i = 1; i <= 4; i++){
            sliderInfo.push({
                picture: `/TeamPictures/Team_${i}.svg`,
                heading: `Team_heading_${i}`,
                subheading: `Team_subheading_${i}`,
                description: `Team_description_${i}`
            })
    }  
 
    const redButtonProps = () => {
        return (
            <RedButton
                className={`${styles.button}`}
                setActive = {setActive}
                buttonText={t('Games_more_button')}
                buttonArrowSrc={"/Arrow_to_right.svg"}/>
        )
    }
    return (
        <div className={styles.wrap}>
            <Slider 
                sliderStyles={styles.slider} 
                sliderInfo={sliderInfo} 
                sliderHeading={teamHeading} 
                sliderQuantity={sliderQuantity} 
                isButtonExist={isButtonExist}
                redButtonProps={redButtonProps}
            />
        </div>
    );
}

export default LastProjects;
