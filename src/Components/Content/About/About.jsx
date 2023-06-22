import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Company from './Sections/Company';
import Team from './Sections/Team';
import styles from './About.module.scss' 



const About = () => {
    const {t} = useTranslation();
    return(
        <div className={styles.aboutWrap}>
            <div className={styles.buttons}>
                    <a>{t('About_button')} <span className="square"></span></a>
                    <a>{t('Team_button')}<span className="square"></span></a>
            </div>
                <Company/>
                <Team/>
        </div>

    );
};

export default About;