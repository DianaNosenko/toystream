import React from 'react';

const Navigation = (props) => {
    const {className} = props;
    return (
        <div className={props.className}>
                <a href="/home">Home</a>
                <a href="/about-us">About us</a>
                <a href="/games">Games</a>
                <a href="/career">Career</a>
                <a href="/news">News</a>
                <a href="/contact-us">Contact us</a>
        </div>
    );
}

export default Navigation;
