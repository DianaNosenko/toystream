import React from 'react';
import { useTranslation } from 'react-i18next';
import InfoIconContainer from '../InfoIconsContainer/InfoIconContainer';
import styles from './About.module.scss' 


const About = () => {
    const {t} = useTranslation();

    const iconsDataArray = []
    for (let i = 1; i <= 4; i++){
        iconsDataArray.push({
            picture: `/InfoIcons/About_icon_image_${i}.svg`,
            heading: `About_icon_heading_${i}`,
            subheading: `About_icon_subheading_${i}`
        })
            
    }

    const iconColor = '#E8D935';
    const animatedColor = '#F2E33A';
    return (
        <div className={styles.aboutWrap}>
            <div className={styles.aboutLeftContainer}>
                <div>{t('About_heading')}</div>
                <div>{t('About_subheading')}</div>
            </div>
            <div className={styles.aboutRightContainer}>
                <InfoIconContainer 
                iconsDataArray={iconsDataArray} 
                iconColor={iconColor} 
                animatedColor={animatedColor}
                />
            </div>    
        </div>
    );
}
export default About;
