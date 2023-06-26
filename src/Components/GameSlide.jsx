import React from 'react';
import styles from './GameSlide.module.scss';
import RedButton from './RedButton/RedButton';
import { useTranslation } from 'react-i18next';

const GameSlide = (props) => {
    const {t} = useTranslation();

    const {data, setActive, setActiveSlide, index} = props;
    const setSlideHandler = () => {
        setActiveSlide(index)
    }
    return (
        <div className={styles.slideWrap}>
          <img src={data.image} alt={data.heading}/>
          <h2>{t(`${data.heading}`)}</h2>
          <p>{t(`${data.description1}`)}</p>
          <p>{t(`${data.description2}`)}</p>
          <RedButton
          setActive={setActive}
          setSlideHandler={setSlideHandler}
          />
        </div>

    );
}

export default GameSlide;
