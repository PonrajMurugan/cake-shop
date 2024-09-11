import React from 'react';
import './welcome2.css'

const WelcomeTwo = () => {
    return (
        <div data-aos="fade-down" className='container'>
            <div className='content'>
                <div className='con-det'>                
                <h1>OUR MISSION</h1>
                <h5>FINEST CUPCAKE EXPERIENCE</h5>
                <p>"To use creative flavors, quality ingredients, and friendly service to provide the finest cupcake experience worthy of returning and recommending."</p>
                <button className='btn btn-danger con-but'>DRINKS</button>
                </div>
                <div className='con-cake'> 
                    <img src='https://static.spotapps.co/website_images/ab_websites/222057_website_v1/about_us_right.png' alt='photo' />
                </div>
           
            </div>
            
        </div>
    );
};

export default WelcomeTwo;