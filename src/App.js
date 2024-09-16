import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Banner from './components/banner';
import Carousel from './components/carousel';
import Events from './components/events';
import Menu from './components/menu';
import NavBar from './components/navBar';
import Portfolio from './components/portFolio';
import Product from './components/product';
import Welcome from './components/welcome';
import WelcomeTwo from './components/welcome2';
import ProductDetails from './components/productDetails';
import Cart from './components/cart';
import Cupcake from './components/cupcake';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<div><Banner /><Welcome /><WelcomeTwo /><Menu /><Carousel /><Portfolio /><Events /><About /></div>} />
          <Route path="/products" element={<Product />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cupcake" element={<Cupcake />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
