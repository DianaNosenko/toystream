import React from 'react';
import Unicorn from './Unicorn';
import styles from './Home.module.scss' 
import { useTranslation } from 'react-i18next';
import RedButton from '../../RedButton/RedButton';

const Home = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.homePageMain}>
            <div className={styles.homePageWrapper}> 
                <div className={styles.homeInfoWrapper}>
                    <section className={styles.homeHeading}>{t('Home_heading')}</section>
                    <section className={styles.homeMoreInfoWrapper}>
                        <RedButton 
                        className={styles.homeMoreInfoButton}
                        buttonLink={'/about-us'}
                        buttonText={'Home_button'}
                        buttonArrowSrc={"/homepage_arrow.svg"}
                        />
                        <div className={styles.homeSubHeading}>{t('Home_subheading')}</div>
                    </section>
                </div>
                <Unicorn/>
            </div>
        </div>
    );
}

export default Home;
