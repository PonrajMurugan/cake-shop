import React from 'react';
import './portFolio.css';

const Portfolio = () => {
  return (
    <div  className='container c7'>
      <h1 style={{ textAlign: 'center', marginTop: "15px", marginBottom: "30px", fontWeight: "700" }}>
        OUR SPECIALS
      </h1>
      <div data-aos="zoom-in-right" className="flex7">
        <div data-aos="fade-right" className="card7">
          <div className="image7">
            <img src="https://static.spotapps.co/spots/54/98ba7ad4f04b269d9a797425db7745/full" alt="Cup-Cake-Icecream" />
          </div>
          <div className="content7">
            <h2>Cup-Cake-Icecream</h2>
          </div>
        </div>

        <div data-aos="fade-right" className="card7">
          <div className="image7">
            <img src="https://static.spotapps.co/spots/0e/95ab961a034782a0aa3f013a6f6529/full" alt="Cake-Donut" />
          </div>
          <div className="content7">
            <h2>Cake-Donut</h2>
          </div>
        </div>

        <div data-aos="fade-right"  className="card7">
          <div className="image7">
            <img src="https://static.spotapps.co/spots/07/ec285dc8024009b6af177de287d99d/full" alt="Cup-Cakes" />
          </div>
          <div className="content7">
            <h2>Cup-Cakes</h2>
          </div>
        </div>

        <div  data-aos="fade-left" className="card7">
          <div  className="image7">
            <img src="https://static.spotapps.co/spots/64/b665b65c39404b8a71443409920666/full" alt="Cup-Cake-Icecream" />
          </div>
          <div className="content7">
            <h2>Cup-Cake-Icecream</h2>
          </div>
        </div>

        <div data-aos="fade-left"  className="card7">
          <div className="image7">
            <img src="https://static.spotapps.co/spots/08/5c5a46f2c54d08ba990ad240984baa/full" alt="Cake-Donut" />
          </div>
          <div className="content7">
            <h2>Cake-Donut</h2>
          </div>
        </div>

        <div data-aos="fade-left"  className="card7">
          <div className="image7">
            <img src="https://static.spotapps.co/spots/77/ff16897b4b45ae920b19e5b33a4f58/full" alt="Made-With-Love" />
          </div>
          <div className="content7">
            <h2>Made-With-Love</h2>
          </div>
        </div>

        <div data-aos="fade-up-right" className="card7">
          <div className="image7">
            <img src="https://static.spotapps.co/spots/84/fa92a71684478daae9aaa6ef74dbc1/full" alt="Authentic-Cakes" />
          </div>
          <div className="content7">
            <h2>Authentic-Cakes</h2>
          </div>
        </div>

        <div data-aos="fade-up-right" className="card7">
          <div className="image7">
            <img src="https://static.spotapps.co/spots/6b/8cf22d3b7c4e909e6b2f39aeef0a15/full" alt="White-Cake-Icecream" />
          </div>
          <div className="content7">
            <h2>White-Cake-Icecream</h2>
          </div>
        </div>

        <div data-aos="fade-up-right" className="card7">
          <div className="image7">
            <img src="https://static.spotapps.co/spots/9f/0d06d1e64146f9bd753fbd2ffe6191/full" alt="Authentic-Cakes" />
          </div>
          <div className="content7">
            <h2>Authentic-Cakes</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
