import React from 'react';
import styles from './Popup.module.scss';
import { useTranslation } from 'react-i18next';

const Popup = (props) => {
    const {active, setActive, className, PopupContent} = props;
    const {t} = useTranslation();
    return (
        <div className={active ? `${styles.popupStyles} ${styles.popupActive}`: `${styles.popupStyles}`}
        onClick={()=>setActive(false)}>
            <div className={`${className} ${styles.content}`} onClick={e => e.stopPropagation()}>
                <span className={styles.closeButton} onClick={()=>setActive(false)}>✕</span>
                {PopupContent()}
            </div>
        </div>
    );
}

export default Popup;
