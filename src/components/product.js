import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css';


const data = [
  {
    id: 1,
    img: "https://assets.winni.in/groot/2024/06/29/desktop/kid-cake.png",
    head: "CAKES",
  },
  {
    id: 2,
    img: "https://assets.winni.in/groot//2024/06/29/desktop/deals-img.png",
    head: "GIFT-HAMPER",
  },
  {
    id: 3,
    img: "https://assets.winni.in/groot/2024/06/29/desktop/rose.jpg",
    head: "FLOWER-BOUQUET",
  },
  {
    id: 4,
    img: "https://assets.winni.in/groot/2024/06/29/desktop/plant.jpg",
    head: "PLANTS",
  },
  {
    id: 5,
    img: "https://assets.winni.in/groot/2024/06/29/desktop/chocolate.jpg",
    head: "CHOCOLATE BOUQUETS",
  },
  {
    id: 6,
    img: "https://assets.winni.in/groot/2024/06/29/desktop/frame.jpg",
    head: "FRAMES",
  },
  {
    id: 7,
    img: "https://assets.winni.in/groot/2023/12/18/desktop/chocolate-hampers.jpg?w=385",
    head: "CHOCOLATE HAMPER",
  },
  {
    id: 8,
    img: "https://assets.winni.in/groot/2023/12/18/desktop/flowers-and-chocolates.jpg?w=385",
    head: "CHOCOLATE AND FLOWERS",
  },
];

const Product = () => {
    const navigate = useNavigate();
  
    const handleProductClick = (id) => {
      navigate(`/product-details/${id}`);
      window.scrollTo(0, 0);
    };
  
    return (
      <div data-aos="fade-left" className="container">
      <h2 className="product-title">Our Menus</h2>
      <div className="product-grid">
        {data.map((item) => (
          <div key={item.id} className="product-item" onClick={() => handleProductClick(item.id)}>
            <img src={item.img} alt={item.head} className="product-img" />
            <h3>{item.head}</h3>
          </div>
        ))}
      </div>
      <div data-aos="fade-right" className="personalized-gifts-section">
        <h1 className="personalized-gifts-title">Personalized Gifts</h1>
        <h5 className="personalized-gifts-subtitle">Customized with Love And Care</h5>
        <img src="https://assets.winni.in/groot/2024/01/18/desktop/personalised-gift-stripe-desktop.jpg" alt="Personalized Gifts" className="personalized-gifts-img" />
      </div>
       
      <div className='image-container'>
  <h1 className='heading'>Present Gifts For Him or Her</h1>
  <div className='images-wrapper'>
    <div data-aos="fade-down-right" className='image-item'>
      <img src='https://assets.winni.in/groot/2023/12/18/desktop/gifts-for-him.jpg?w=775' alt='photo' />
      <div className='overlay'>
        <p>Gift For Him</p>
      </div>
    </div>
    <div data-aos="fade-down-left" className='image-item'>
      <img src='https://assets.winni.in/groot/2023/12/18/desktop/gifts-for-her.jpg?w=775' alt='photo' />
      <div className='overlay'>
        <p>Gift For Her</p>
      </div>
    </div>
  </div>
</div>


 


    </div>
    
  );
};

export default Product;
