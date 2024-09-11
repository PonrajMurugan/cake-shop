import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  

  const handleMenuClick = () => {
    navigate('/products');
    window.scrollTo(0, 0);
  };

  return (
    <div data-aos="fade-right" className="container cont">
      <div className="ban-image">
        <img
          src="https://static.spotapps.co/website_images/ab_websites/222057_website_v1/order_left.png"
          alt="welcome-image"
        />
        <div className="ban-det">
          <h1>WELCOME TO</h1>
          <h5>SMALLCAKES OF FORT MYERS</h5>
          <p>
            We are a gourmet cupcake bakery and creamery, and we bake and
            frost 18 signature flavors every morning, fresh from scratch.
            Our menu features seasonal and unique flavors created by Jeff
            Martin, the founder of Smallcakes.
          </p>
          <button className="btn btn-danger" onClick={handleMenuClick}>
            MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
