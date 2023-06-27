import React from 'react';
import styles from './OurWorks.module.scss' 
import GameArticle from './GameArticle/GameArticle';
import data from '../../../../constants/data/games_data.json';

const OurWorks = () => {
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
        </div>
    );
}

export default OurWorks;






