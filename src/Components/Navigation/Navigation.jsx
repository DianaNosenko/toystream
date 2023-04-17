import React from 'react';
import {Link} from 'react-router-dom'


const Navigation = (props) => {
    const {className} = props;
    return (
        <div className={props.className}>
                <Link  to="/">Home</Link>
                <Link  to="/about-us">About us</Link>
                <Link  to="/games">Games</Link>
                <Link  to="/career">Career</Link>
                <Link  to="/news">News</Link>
                <Link  to="/contact-us">Contact us</Link>
        </div>
    );
}

export default Navigation;
