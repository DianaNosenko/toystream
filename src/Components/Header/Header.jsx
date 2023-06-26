import React from 'react';
import styles from './Header.module.css' 
import Navigation from '../Navigation/Navigation';
import {setLang} from '../../redux/actions/actionCreator'
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

const Header = (props) => {
    const {lang, setLang} = props;
    const langSwitcher = () => {
        if (lang === 'en') {
            setLang('ru');
        } else if (lang === 'ru') {
            setLang('en');
        }

    };
    const {t} = useTranslation();

    return (
        <div className={styles.headerStyle}>
            <div className={styles.logoImage}>
                <img src="/logo.svg" alt="no image:(" />
            </div>
            <Navigation className={styles.headerNav}/>
            <button onClick={langSwitcher} className={styles.headerButton}>
                {lang === 'ru' ? t('en') : t('ru')}
            </button>
        </div>

    );
}
const mapDispatchToProps = {setLang}
const mapStateToProps = (state) => state.langReducer

export default connect(mapStateToProps, mapDispatchToProps)(Header);