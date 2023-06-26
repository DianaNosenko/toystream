import React from 'react';
import styles from './RedButton.module.scss' 
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const RedButton = (props) => {
     const {t} = useTranslation();
     const {buttonLink, className, buttonText, buttonArrowSrc, setActive} = props;

     const buttonContent = () => {
        return (
            <>
                <div>{t(`${buttonText}`)}</div>
                <img src={buttonArrowSrc} alt="#" srcSet="" />
            </>
        )
     }
     const buttonIfActive = () => {
        return (
            <button  className={`${className} ${styles.RedButton}`} onClick={() => {props.setActive(true); props.setSlideHandler()}}>
                {buttonContent()}
            </button>
        )
     }
     const buttonIfInactive = () => {
        return (
            <button  className={`${className} ${styles.RedButton}`}>
                {buttonContent()}
            </button>
        )
     }

    return (
        <Link  to={buttonLink} style={{ textDecoration: 'none'}}>
            {setActive? buttonIfActive() : buttonIfInactive()}
        </Link>
    );
}

export default RedButton;
