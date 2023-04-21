import React from 'react';
import Unicorn from './Unicorn';
import styles from './Home.module.scss' 
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'

const Home = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.homePageWrapper}>
            <div className={styles.homeInfoWrapper}>
                <section className={styles.homeHeading}>{t('Home_heading')}</section>
                <section className={styles.homeMoreInfoWrapper}>
                    <Link  to="/about-us">
                        <button className={styles.homeMoreInfoButton}>
                            {t('Home_button')}
                            <img src="/homepage_arrow.svg" alt="#" srcset="" />
                        </button>
                    </Link>
                    <div className={styles.homeSubHeading}>{t('Home_subheading')}</div>
                </section>
            </div>
            <Unicorn/>
        </div>
    );
}

export default Home;
