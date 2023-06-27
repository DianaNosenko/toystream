import React from 'react';

const MediaLinks = (props) => {
    const {className} = props;
    return (
        <div className={props.className}>
            <a href="#"><img src="/Images/MediaLinks/Pinterest.svg" alt="" /></a>
            <a href="#"><img src="/Images/MediaLinks/Behance.svg" alt="" /></a>
            <a href="#"><img src="/Images/MediaLinks/Dribbble.svg" alt="" /></a>
            <a href="#"><img src="/Images/MediaLinks/Snapchat.svg" alt="" /></a>
            <a href="#"><img src="/Images/MediaLinks/Linkedin.svg" alt="" /></a>
            <a href="#"><img src="/Images/MediaLinks/Facebook.svg" alt="" /></a>
        </div>
    );
}

export default MediaLinks;
