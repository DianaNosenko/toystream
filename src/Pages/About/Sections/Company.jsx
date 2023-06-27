import React from 'react';
import styles from './Company.module.scss' 
import { useTranslation } from 'react-i18next';
import InfoIconContainer from '../../../Components/InfoIconsContainer/InfoIconContainer';

const Company = () => {
    const {t} = useTranslation();
        
    const iconsDataArray = []
    for (let i = 1; i <= 4; i++){
        iconsDataArray.push({
            picture: `/Images/InfoIcons/About_icon_image_${i}.svg`,
            heading: `About_icon_heading_${i}`,
            subheading: `About_icon_subheading_${i}`
        })
            
    }

    const iconColor = '#E8D935';
    const animatedColor = '#F2E33A';
    return (
            <div className={styles.wrap}>
                <div className={styles.contentWrap}>
                    <div className={styles.companyInfoContainer}>
                            <h2>{t('About_heading')}</h2>
                            <h4>{t('About_subheading')}</h4>
                        </div>
                        <div className={styles.companyIconsContainer}>
                            <InfoIconContainer 
                            iconsDataArray={iconsDataArray} 
                            iconColor={iconColor} 
                            animatedColor={animatedColor}
                            />
                        </div>    
                    </div>
                </div>
            );
        }

export default Company;
