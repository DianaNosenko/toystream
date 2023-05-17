import React from 'react';
import { useTranslation } from 'react-i18next';
import InfoIconContainer from '../InfoIconsContainer/InfoIconContainer';

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
        <div>
           {t('About_heading')}
             <InfoIconContainer 
             iconsDataArray={iconsDataArray} 
             iconColor={iconColor} 
             animatedColor={animatedColor}
             />
        </div>
    );
}
export default About;
