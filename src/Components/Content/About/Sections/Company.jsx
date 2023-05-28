import React from 'react';
import styles from './Company.module.scss' 
import { useTranslation } from 'react-i18next';
import InfoIconContainer from '../../InfoIconsContainer/InfoIconContainer';

const Company = () => {
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
            <div className={styles.companyWrap}>
                    <div className={styles.companyLeftContainer}>
                        <div>{t('About_heading')}</div>
                        <div>{t('About_subheading')}</div>
                    </div>
                    <div className={styles.companyRightContainer}>
                        <InfoIconContainer 
                        iconsDataArray={iconsDataArray} 
                        iconColor={iconColor} 
                        animatedColor={animatedColor}
                        />
                    </div>    
                </div>
            );
        }

export default Company;
