import React from 'react';
import './cupcake.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/redux/cartSlice';

const cakeData = [
  {
    id: 1,
    card_img: "https://assets.winni.in/product/primary/2014/8/41848.jpeg?dpr=1&w=400",
    head: "BUTTERSCOTCH CUPCAKE",
    price:350,
  },
  {
    id: 2,
    card_img: "https://assets.winni.in/product/primary/2021/8/53338.jpeg?dpr=1&w=400",
    head: "CHOCO BERRY CUPCAKE",
    price:500,
  },
  {
    id: 3,
    card_img: "https://assets.winni.in/product/primary/2021/8/53330.jpeg?dpr=1&w=400",
    head: "STRAWBERRY CUPCAKE",
    price:650,
  },
  {
    id: 4,
    card_img: "https://assets.winni.in/product/primary/2021/8/53335.jpeg?dpr=1&w=400",
    head: "RAINBOW CUPCAKE",
    price:450,
  },
  {
    id: 5,
    card_img: "https://assets.winni.in/product/primary/2022/5/60738.jpeg?dpr=1&w=400",
    head: "VANNILA CUPCAKE",
    price:785,
  },
  {
    id: 6,
    card_img: "https://assets.winni.in/product/primary/2021/8/53331.jpeg?dpr=1&w=400",
    head: "CHOCO VANNILA CUPCAKE",
    price:180,
  },
  {
    id: 7,
    card_img: "https://assets.winni.in/product/primary/2014/8/45942.jpeg?dpr=1&w=400",
    head: "VELVET CUPCAKE",
    price:950,
  },
  {
    id: 8,
    card_img: "https://assets.winni.in/product/primary/2022/12/80327.jpeg?dpr=1&w=400",
    head: "RED CHRISTMAS CUPCAKE",
    price:750,
  },
];

const Cupcake = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); 
    
  };

  return (

<div className='ct'>
  <h1 className='cup-menu'>CUPCAKES</h1>

  <div className="cake-gallery">
    {cakeData.map((item) => (
      <div key={item.id} className="cake-item">
        <img src={item. card_img} alt={item.head} className="cake-img" />
        <h2 className="cake-head">{item.head}</h2>
        <h5 style={{textAlign:"center"}}> ₹ {item.price}</h5>
        <button className='btn btn-primary' onClick={() => handleAddToCart(item)}>Add Cart</button>
      </div>
    ))}
  </div>
</div>

  );
};

export default Cupcake;
