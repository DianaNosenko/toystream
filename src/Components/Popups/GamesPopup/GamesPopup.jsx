import React, {useEffect} from 'react';
import styles from './GamesPopup.module.scss';
import { setActive, setActiveSlide } from '../../../redux/actions/actionCreator';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const GamesPopup = (props) => {
    const {t} = useTranslation();

    const {className, sliderInfo} = props;
    const {active, setActive, activeSlide} = props;
    const {heading, description1, description2, image, linkGooglePlay, linkAppStore} = sliderInfo[activeSlide];

    useEffect(() => {
        if (active) {
          document.body.classList.add(styles.scrollLock);
        } else {
          document.body.classList.remove(styles.scrollLock);
        }
        return () => {
          document.body.classList.remove(styles.scrollLock);
        };
      }, [active]);
      
    return (
        <div className={active ? `${styles.popupStyles} ${styles.popupActive}`: `${styles.popupStyles}`} onClick={()=>setActive(false)}>
            <div className={`${className} ${styles.content}`} onClick={e => e.stopPropagation()}>
                <span className={styles.closeButton} onClick={()=>setActive(false)}>✕</span>
                <div className={styles.popupWrap}>
                    <div className={styles.popupInfo}>
                        <h2>{heading}</h2>
                        <p>{t(`${description1}`)}<br/><br/>{t(`${description2}`)}</p>
                    </div>
                    <div className={styles.popupImages}>
                        <div className={styles.imgContainer}>
                            <img src={image} alt={heading} />
                        </div>
                        <div className={styles.linksContainer}>
                            <a rel="nofollow" href={linkGooglePlay}>
                                <img src="/Images/PopupImages/Google_Play.png" alt="Goole Play Link"/>
                            </a>
                            <a rel="nofollow" href={linkAppStore}>
                                <img src="/Images/PopupImages/App_Store.png" alt="App Store Link"/>
                            </a>
                         </div>
                    </div> 
                </div> 
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    setActive,
    setActiveSlide
}

const mapStateToProps = (state) => {
    return {
        active: state.buttonReducer.active,
        activeSlide: state.sliderReducer.activeSlide
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesPopup);