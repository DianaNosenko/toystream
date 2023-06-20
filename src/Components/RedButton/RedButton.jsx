import React from 'react';
import styles from './RedButton.module.scss' 
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const RedButton = (props) => {
     const {t} = useTranslation();
    return (
        <div>
            <Link  to={props.buttonLink} style={{ textDecoration: 'none' }}>
                <button className={`${props.className} ${styles.RedButton}`}>
                    <div>{t(`${props.buttonText}`)}</div>
                    <img src={props.buttonArrowSrc} alt="#" srcset="" />
                </button>
            </Link>
        </div>
    );
}

export default RedButton;
