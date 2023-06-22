import React from 'react';
import styles from './OurWorks.module.scss' 
import GameArticle from './GameArticle';
import data from './games_data.json';
import { useTranslation } from 'react-i18next';

const OurWorks = () => {
    const {t} = useTranslation();

    return (
        <div>
            {data.map((component, index) => (
                <div className={`${index % 2 === 0 ? '' : styles.reverse} ${styles.wrap}`}>
                    <GameArticle
                    key={component.id}
                    picture={component.image}
                    heading={component.heading}
                    description1={t(component.description1)}
                    description2={t(component.description2)}
                    linkGooglePlay={component.linkGooglePlay}
                    linkAppStore={component.linkAppStore}
                    />
                </div>
            ))}    
        </div>
    );
}

export default OurWorks;

