import React from 'react';
import './events.css'

const Events = () => {
    return (
<div className="events-section container">
    <div data-aos="fade-down-left" className="events-content">
        <div className="events-image">
            <img src='https://static.spotapps.co/website_images/ab_websites/222057_website_v1/events_left.png' alt='events' />
        </div>
        <div className="events-text">
            <h1 className="events-title">OUR EVENTS</h1>
            <h5 className="events-subtitle">SOMETHING FOR EVERYONE</h5>
            <p className="events-description">Fall in love with atmosphere and sweet memorable <br/> moments at SmallCakes Fort Myers all over again.</p>
            <button className='btn btn-danger'>EVENTS</button>
        </div>
    </div>
</div>

    );
};

export default Events;