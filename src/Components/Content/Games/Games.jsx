import React from 'react';
import GamesMain from './Sections/GamesMain/GamesMain';
import OurWorks from './Sections/OurWorks/OurWorks';
import LastProjects from './Sections/LastProjects/LastProjects';
import styles from './Games.module.scss' 


const Games = () => {

    return (
        <div>
            <GamesMain/>
            <OurWorks/>
            <LastProjects/>
        </div>
    );
}

export default Games;
