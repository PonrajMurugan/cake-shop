import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 
import { FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa'; 
import { useSelector } from 'react-redux'; 
import './navBar.css';

const NavBar = () => {
    const navigate = useNavigate(); 
    window.scrollTo(0, 0);
    const cartItems = useSelector(state => state.cart.items.length); 

    const goToCartPage = () => {
        navigate('/cart');
        window.scrollTo(0, 0);
    };

    return (
        <div style={{ 
            textAlign: 'center', 
            position: 'fixed', 
            top: 0, 
            width: '100%', 
            zIndex: 1000, 
            backgroundColor: '#fff'
        }}>
              <Link to="/" style={{ display: 'inline-block' }}>
            <img 
                style={{ width: '60%' }}
                src='https://static.spotapps.co/website_images/ab_websites/222057_website_v1/logo.png' 
                alt="Logo"
            />
        </Link>
  
            <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
                <div className="container-fluid">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div 
                        className="collapse navbar-collapse justify-content-center" 
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <Link className="nav-link b-r" to="/">HOME</Link>
                            <Link className="nav-link b-r" to="/products">MENU</Link>
                            <Link className="nav-link b-r" to="/cupcake">CUP-CAKE</Link>
                            <Link className="nav-link b-r" to="/cart">ORDER</Link>                          
                            
                            <Link className="nav-link b-r" to="#">SPECIALS</Link>  
                            <Link className="nav-link b-r" to="#">EVENTS</Link>
                            <Link className="nav-link b-r" to="#">ABOUT-US</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="navbar-icons">
                <div className="icon-container" onClick={goToCartPage}>
                    <FaShoppingCart className="icon" />
                    {cartItems > 0 && (
                        <span className="cart-badge">{cartItems}</span>
                    )}
                </div>
                <FaUser className="icon" />
                <FaHeart className="icon" />
            </div>
        </div>
    );
};

export default NavBar;
