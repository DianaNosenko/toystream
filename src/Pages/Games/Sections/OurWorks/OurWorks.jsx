import React from 'react';
import styles from './OurWorks.module.scss' 
import GameArticle from './GameArticle/GameArticle';
import data from '../../../../constants/data/games_data.json';
import RedButton from '../../../../Components/RedButton/RedButton';
import { useTranslation } from 'react-i18next';

const OurWorks = () => {
    const {t} = useTranslation();
    return (
        <div>
            {data.map((component, index) => (
                <div className={`${index % 2 === 0 ? '' : styles.reverse} ${styles.wrap}`} key={component.id}>
                    <GameArticle
                    data={component}
                    reverse={index % 2 === 0 ? '' : styles.reverse}
                    index={index}
                    key={index}
                    />
                </div>
            ))} 
            <RedButton
            className={styles.button}
            buttonText={t('More_Projects_Button')}
            buttonArrowSrc={"/Images/Arrows/Arrow_to_bottom.svg"}/>   
        </div>
    );
}

export default OurWorks;






