import React from 'react';
import styles from './GameSlide.module.scss';
import RedButton from './RedButton/RedButton';
import { useTranslation } from 'react-i18next';
import { setActive, setActiveSlide } from '../redux/actions/actionCreator';
import { connect } from 'react-redux';

const GameSlide = (props) => {
    const {t} = useTranslation();
    const {setActive, setActiveSlide} = props;

    const {data, index} = props;
    const setSlideHandler = () => {
        setActiveSlide(index)
    }
    return (
        <div className={styles.slideWrap}>
          <img src={data.image} alt={data.heading} className={styles.image}/>
          <h2>{t(`${data.heading}`)}</h2>
          <p>{t(`${data.description1}`)}</p>
          <p>{t(`${data.description2}`)}</p>
          <RedButton
          className={styles.button}
          setActive={setActive}
          setSlideHandler={setSlideHandler}
          buttonText={t('Games_more_button')}
          buttonArrowSrc={"/Arrow_to_right.svg"}/>
        </div>

    );
}
const mapDispatchToProps = {
  setActive,
  setActiveSlide
}

const mapStateToProps = (state) => {
  return {
      active: state.buttonReducer.active,
      activeSlide: state.sliderReducer.activeSlide
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(GameSlide);
