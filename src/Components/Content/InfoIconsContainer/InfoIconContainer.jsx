import React from 'react';
import InfoIcon from './InfoIcon/InfoIcon';
import styles from'./InfoIconContainer.module.scss';

const InfoIconContainer = (props) => {
    const { iconsDataArray, iconColor, animatedColor} = props;
    return (
        <div className={styles.container}>
            {iconsDataArray.map((iconData, index) => (
                <InfoIcon
                    key={index}
                    picture={iconData.picture}
                    heading={iconData.heading}
                    subheading={iconData.subheading}
                    iconColor={iconColor}
                    animatedColor={animatedColor}
                />
            ))}
        </div>
    );
}

export default InfoIconContainer;
