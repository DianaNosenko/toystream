import React from 'react';
import styles from './Content.module.css' 
import Home from '../../../Pages/Home/Home'
import About from '../../../Pages/About/About'
import Games from '../../../Pages/Games/Games'
import Career from '../../../Pages/Career/Career'
import News from '../../../Pages/News/News'
import Contact from '../../../Pages/Contact/Contact'
import {Route, Routes} from 'react-router-dom'

const Content = () => {
    return (
            <div className={styles.contentStyle}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about-us" element={<About/>}/>
                    <Route path="/games" element={<Games/>}/>
                    <Route path="/career" element={<Career/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/contact-us" element={<Contact/>}/>
                </Routes>
            </div>
    );
}

export default Content;
