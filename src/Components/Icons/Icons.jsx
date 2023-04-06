import React from 'react';

const Icons = (props) => {
    const {className} = props;
    return (
        <div className={props.className}>
            <a href="#"><img src="/icons/Pinterest.svg" alt="" /></a>
            <a href="#"><img src="/icons/Behance.svg" alt="" /></a>
            <a href="#"><img src="/icons/Dribbble.svg" alt="" /></a>
            <a href="#"><img src="/icons/Snapchat.svg" alt="" /></a>
            <a href="#"><img src="/icons/Linkedin.svg" alt="" /></a>
            <a href="#"><img src="/icons/Facebook.svg" alt="" /></a>
        </div>
    );
}

export default Icons;
