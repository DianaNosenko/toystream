import React from 'react';
import { useTranslation } from 'react-i18next';
import InfoIconContainer from '../InfoIconsContainer/InfoIconContainer';


const About = () => {
    const {t} = useTranslation();
    return (
        <div>
           {t('About')}
           <InfoIconContainer/>
        </div>
    );
}

export default About;
