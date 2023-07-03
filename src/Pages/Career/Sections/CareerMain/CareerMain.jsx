import React, {useState} from 'react';
import styles from './CareerMain.module.scss'
import { useTranslation } from 'react-i18next';
import RedButton from '../../../../Components/RedButton/RedButton';

const CareerMain = () => {
    const {t} = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseEnter = () => {
        setIsHovered(true)
    };
    const handleMouseLeave = () => {
        setIsHovered(false)
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.contentWrap}>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                        <div>{t('Career_main_heading')}</div>
                        <div>{t('Career_main_subheading')}</div>
                    </div>
                    <RedButton 
                        className={styles.careerMainButton}
                        buttonLink={'#'}
                        buttonText={'Career_main_button'}
                        buttonArrowSrc={"/Images/Arrows/Arrow_to_bottom.svg"}
                    />
                </div>
                <div className={isHovered ? `${styles.imageHovered} ${styles.imageContainer}`: `${styles.imageUnhovered} ${styles.imageContainer}`}>
                    <img 
                    src={isHovered ? '/Images/CareerMainImageHover.svg' : '/Images/CareerMainImage.svg'} alt="Image"
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    />
                </div>
            </div>
        </div>
    );
}

export default CareerMain;
