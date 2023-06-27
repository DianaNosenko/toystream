import React from 'react';
import styles from './GameArticle.module.scss';
import { useTranslation } from 'react-i18next';
import RedButton from '../../../../../Components/RedButton/RedButton';
import { setActive, setActiveSlide } from '../../../../../redux/actions/actionCreator';
import { connect } from 'react-redux';

const GameArticle = (props) => {
    const {t} = useTranslation();
    
    const {data, reverse, index} = props;
    const {image, heading, description1, description2} = data;
    const {setActive, setActiveSlide} = props;

    const setSlideHandler = () => {
        setActiveSlide(index)
    }
    return (
            <div className={`${styles.wrap} ${reverse}`}>
                <div className={styles.info}>
                        <div className={styles.heading}>{t(`${heading}`)}</div>
                        <div className={styles.description}>{t(`${description1}`)} <br/><br/> {t(`${description2}`)}</div>
                        <RedButton
                        className={styles.button}
                        setActive = {setActive}
                        setSlideHandler={setSlideHandler}
                        buttonText={t('Games_more_button')}
                        buttonArrowSrc={"/Images/Arrows/Arrow_to_right.svg"}/>
                </div>
                <div className={styles.picture}><img src={image} alt={t(`${heading}`)} /></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameArticle);

