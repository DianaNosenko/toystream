import React, { useState } from 'react';
import styles from './Slider.module.scss' 

const Slider = ({ sliderInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftArrowColor, setLeftArrowColor] = useState('#C3B6B6');
  const [rightArrowColor, setRightArrowColor] = useState('#C3B6B6');
  const [leftButtonActive, setLeftButtonActive] = useState(false);
  const [rightButtonActive, setRightButtonActive] = useState(false);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderInfo.length - 1 : prevIndex - 1));
    setLeftArrowColor('#FFFFFF');
    setLeftButtonActive(true);
    setTimeout(() => {
      setLeftArrowColor('#C3B6B6');
      setLeftButtonActive(false);
    }, 200);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderInfo.length - 1 ? 0 : prevIndex + 1));
    setRightArrowColor('#FFFFFF');
    setRightButtonActive(true);
    setTimeout(() => {
      setRightArrowColor('#C3B6B6');
      setRightButtonActive(false);
    }, 200);
  };

  const visibleSlides = [
    currentIndex === 0 ? sliderInfo.length - 1 : currentIndex - 1,
    currentIndex,
    (currentIndex + 1) % sliderInfo.length,
    (currentIndex + 2) % sliderInfo.length
  ];

  return (
    <div className={styles.sliderWrap}>
      <div className={styles.buttonAndHeadingWrap}>
        <h2>Heading</h2>
        <div className={styles.buttonsWrap}>
          <button className={styles.sliderButton} 
          style={{ backgroundColor: leftButtonActive ? '#CE0002' : '#F1F1F1' }}
          onClick={goToPreviousSlide}>
            <svg className={styles.arrowSvg} xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16">
              <path fill={leftArrowColor} d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM26 7L1 7L1 9L26 9L26 7Z" />
            </svg>
          </button>

          <button className={styles.sliderButton}
          style={{ backgroundColor: rightButtonActive ? '#CE0002' : '#F1F1F1' }} 
          onClick={goToNextSlide}>
            <svg className={styles.arrowSvg} xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16">
              <path fill={rightArrowColor} d="M25.7071 8.7071C26.0976 8.31658 26.0976 7.68341 25.7071 7.29289L19.3431 0.92893C18.9526 0.538405 18.3195 0.538406 17.9289 0.92893C17.5384 1.31945 17.5384 1.95262 17.9289 2.34314L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.7071ZM1.22392e-07 9L25 9L25 7L-1.22392e-07 7L1.22392e-07 9Z" />
            </svg>
          </button>
      </div>
    </div>
      
      <div className={styles.sliderContainer}>
        {visibleSlides.map((slideIndex, index) => {
          const { picture, heading, subheading, description, link } = sliderInfo[slideIndex];
          return (
            <div className={styles.slide} key={index}>
              <img src={picture} alt="No Image :(" />
              <h4>{heading}</h4>
              <h5>{subheading}</h5>
              <p>{description}</p>
              <a href={link}></a>
            </div>
          );
        })}
      </div>  
    </div>
  );
};

export default Slider;