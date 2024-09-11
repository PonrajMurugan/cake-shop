import React from 'react';
import './menu.css'
import {useNavigate } from 'react-router-dom';

const Menu = () => {


    const navigate = useNavigate(); 
    
    const handleMenuClick = () => {
      navigate('/products');
      window.scrollTo(0, 0);
    };
 
    return (
        
        <div  data-aos="fade-right" className=''>
            <div className='bk-image-whole'>
                <h1>Bakery Specializing In Gourmet Cupcakes</h1>
                <h5>Wedding Cakes · Birthday Cakes · Themed Cupcakes · Pup Cakes</h5>
                <p>Try one of our signature selections and see what everyone's talking about!</p>
                <button className='btn btn-danger' onClick={handleMenuClick}>ORDER</button>
            </div>
            
        </div>
    );
};

export default Menu;