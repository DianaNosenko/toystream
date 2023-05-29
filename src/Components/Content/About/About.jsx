import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss' 
import Company from './Sections/Company';
import Team from './Sections/Team';


const About = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.aboutWrap}>
            <Company/>
            <Team/>
        </div>
    );
}
export default About;
