import React from 'react';
import styles from './Content.module.css' 
import Home from './Home/Home'
import About from './About/About'
import Games from './Games/Games'
import Career from './Career/Career'
import News from './News/News'
import Contact from './Contact/Contact'
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
