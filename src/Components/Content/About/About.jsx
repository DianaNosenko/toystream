import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss' 
import Company from './Sections/Company';
import Team from './Sections/Team';
import { Element, Link } from 'react-scroll';


const About = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.aboutWrap}>
            <div className={styles.buttons}>
                <Link to="company" smooth={true} duration={500}>
                    <button>company</button>
                </Link>
                <Link to="team" smooth={true} duration={500}>
                    <button>team</button>
                </Link>
            </div>
            <Element name="company" className="section">
                <Company/>
            </Element>
            <Element name="team" className="section">
                <Team/>
            </Element>
        </div>
    );
}
export default About;
