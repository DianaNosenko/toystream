import React, {useState} from 'react';
import styles from './GameArticle.module.scss';
import { useTranslation } from 'react-i18next';
import RedButton from '../../../../RedButton/RedButton';
import Popup from '../../../../Popup/Popup';

const GameArticle = (props) => {
    const {t} = useTranslation();
    const [active, setActive] = useState(false);
    const {picture, heading, description1, description2, linkAppStore, linkGooglePlay, reverse} = props;

    const PopupContent = () => {
        return(
            <div className={styles.popupWrap}>
            <div className={styles.popupInfo}>
                <h2>{heading}</h2>
                <p>{description1}<br/><br/>{description2}</p>
            </div>
            <div className={styles.popupImages}>
                <div className={styles.imgContainer}>
                    <img src={picture} alt={heading} />
                </div>
                <div className={styles.linksContainer}>
                    <a rel="nofollow" href={linkGooglePlay}>
                        <img src="/Google_Play.png" alt="Goole Play Link"/>
                    </a>
                    <a rel="nofollow" href={linkAppStore}>
                        <img src="/App_Store.png" alt="App Store Link"/>
                    </a>
                </div>
            </div>
            </div>
        )
    }
    return (
        <div className={styles.wrap}>
                <div className={styles.info}>
                    <div className={styles.heading}>{t(`${heading}`)}</div>
                    <div className={styles.description}>{t(`${description1}`)} <br/><br/> {t(`${description2}`)}</div>
                    <RedButton
                    className={`${styles.homeMoreInfoButton} ${styles.button}`}
                    setActive = {setActive}
                    buttonText={t('Games_more_button')}
                    buttonArrowSrc={"/Arrow_to_right.svg"}/>
                    </div>
                <div className={styles.picture}><img src={picture} alt="No Image :(" /></div>
                <Popup 
                active={active} 
                setActive={setActive} 
                className={styles.popupStyles} 
                PopupContent={PopupContent}
                />
        </div>
    );
}

export default GameArticle;
