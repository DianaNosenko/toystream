import React from 'react';
import GamesMain from './Sections/GamesMain';
import OurWorks from './Sections/OurWorks';
import LastProjects from './Sections/LastProjects';
import About from '../About/About'

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
