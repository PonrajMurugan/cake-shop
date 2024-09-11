import React from 'react';
import './carousel.css'

const Carousel = () => {
    return (
        <div  className='car-wd'>
<div  data-aos="fade-up-right" id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://res.cloudinary.com/spothopper/image/fetch/f_auto,q_70,c_fit,h_864/http://static.spotapps.co/spots/73/43619c429c4e9dacbb4655b7b810a8/:original" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Amazing Flavours</h5>
        <p>Packed With Flavours</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://res.cloudinary.com/spothopper/image/fetch/f_auto,q_70,c_fit,h_864/http://static.spotapps.co/spots/0a/3b0c3f9e754e178d9fc34c565ae319/:original" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>We Use Only The Best Ingredients</h5>
        <p>Have A Huge Variety Of Flavours</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://res.cloudinary.com/spothopper/image/fetch/f_auto,q_70,c_fit,h_864/http://static.spotapps.co/spots/86/bba9f167f44be4a98bea54849dfcb5/:original" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Groups And Parties</h5>
        <p>We Host Unforgettable Gatherings</p>
      </div>
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
            
        </div>
    );
};

export default Carousel;