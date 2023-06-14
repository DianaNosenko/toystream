import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Company from './Sections/Company';
import Team from './Sections/Team';
import styles from './About.module.scss' 
import { Element, Link } from 'react-scroll';
import { FullPage, Slide } from 'react-full-page';


const About = () => {
    const {t} = useTranslation();
    return(
        <div className={styles.aboutWrap}>
            <div className={styles.buttons}>
                <Link to="company" smooth={true} duration={500}>
                    <a>{t('About_button')} <span className="square"></span></a>
                </Link>
                <Link to="team" smooth={true} duration={500}>
                    <a>{t('Team_button')}<span className="square"></span></a>
                </Link>
            </div>
            <FullPage>
            <Slide>
            <Element name="company" className="section">
                <Company/>
            </Element>
            </Slide>
            <Slide>
            <Element name="team" className="section">
                <Team/>
            </Element>
            </Slide>
            </FullPage>
        </div>

    );
};

export default About;