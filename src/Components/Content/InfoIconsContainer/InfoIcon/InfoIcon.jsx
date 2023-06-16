import React from 'react';
import styles from'./InfoIcon.module.scss';
import { useTranslation } from 'react-i18next';

const InfoIcon = (props) => {
    const {t} = useTranslation();
    return (
        <div className={styles.infoIconWrap}>
            <div className={styles.iconContainer} style={{ backgroundColor: props.iconColor }}>
                <img src={props.picture} alt="no image :(" />
            </div>
            <div className={styles.animatedFone} style={{ backgroundColor: props.animatedColor }}></div>
            <h2>{t(`${props.heading}`)}</h2>
            <h4>{t(`${props.subheading}`)}</h4>
        </div>
    );
}

export default InfoIcon;
