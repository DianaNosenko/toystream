import React, {useEffect} from 'react';
import styles from './LastProjectPopup.module.scss';

const LastProjectPopup = (props) => {
    const {active, setActive, className, sliderInfo, activeSlide} = props;
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
                <p>{description1}<br/><br/>{description2}</p>
            </div>
            <div className={styles.popupImages}>
                <div className={styles.imgContainer}>
                    <img src={image} alt={heading} />
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
            </div>
        </div>
    );
}

export default LastProjectPopup;