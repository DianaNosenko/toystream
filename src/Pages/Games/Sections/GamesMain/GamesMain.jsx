import React from 'react';
import styles from './GamesMain.module.scss' 
import { useTranslation } from 'react-i18next';
import RedButton from '../../../../Components/RedButton/RedButton';
import SpriteAnimation from './SpriteAnimationCharacter';

const GamesMain = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.wrap}>
            <div className={styles.contentWrap}>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                        <div>{t('Games_main_heading')}</div>
                        <div>{t('Games_main_subheading1')} <br/> <br/> {t('Games_main_subheading2')}</div>
                    </div>
                    <RedButton 
                        className={styles.gamesMainButton}
                        buttonLink={'/games'}
                        buttonText={'Games_main_button'}
                        buttonArrowSrc={"/Images/Arrows/Arrow_to_bottom.svg"}
                    />
                </div>
                <SpriteAnimation/>
            </div>
        </div>
    );
}

export default GamesMain;
