import React from 'react';
import styles from './GameArticle.module.scss';
import { useTranslation } from 'react-i18next';
import RedButton from '../../../../RedButton/RedButton';

const GameArticle = (props) => {
    const {t} = useTranslation();
    const {picture, key, heading, description1, description2, link} = props;

    return (
        <div className={styles.wrap}>
                <div className={styles.info}>
                    <div className={styles.heading}>{t(`${heading}`)}</div>
                    <div className={styles.description}>{t(`${description1}`)} <br/><br/> {t(`${description2}`)}</div>
                    <RedButton
                    className={`${styles.homeMoreInfoButton} ${styles.button}`}
                    buttonLink={link}
                    buttonText={t('Games_more_button')}
                    buttonArrowSrc={"/Arrow_to_right.svg"}/>
                    </div>
                <div className={styles.picture}><img src={picture} alt="No Image :(" /></div>
        </div>
    );
}

export default GameArticle;
