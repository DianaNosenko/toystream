import React from 'react';
import Company from './Sections/Company';
import Team from './Sections/Team';
import styles from './About.module.scss' 

const About = () => {
    return(
        <div className={styles.aboutWrap}>
            <Company/>
            <Team/>
        </div>

    );
};

export default About;