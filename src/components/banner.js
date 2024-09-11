import React from 'react';
import "./banner.css";

const Banner = () => {
    return (
<div style={{ 
    width: '100%', 
    height: '100vh', 
    marginTop: '170px', 
    overflow: 'hidden',  
    position: 'relative' 
}}>
    <video 
        src="https://static.spotapps.co/website_videos/Small_Cakes_Vimeo720p30.mp4" 
        autoPlay  
        loop            
        muted
        style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            position: 'absolute', 
            top: '0', 
            left: '0' 
        }} 
    />
</div>

        
    );
};

export default Banner;
