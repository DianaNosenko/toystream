import React from 'react';
import GamesMain from './Sections/GamesMain/GamesMain';
import OurWorks from './Sections/OurWorks/OurWorks';
import LastProjects from './Sections/LastProjects/LastProjects';
import GamesPopup from './GamesPopup/GamesPopup';
import data from './Sections/OurWorks/games_data.json';


const Games = () => {
    return (
        <div>
            <GamesMain/>
            <OurWorks/>
            <LastProjects/>
            <GamesPopup sliderInfo={data}/>
        </div>
    );
}

export default Games;
