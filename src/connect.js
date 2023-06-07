import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Shop1 from './shop1';
import Shop2 from './shop2';
import Shop3 from './shop3';
import Shop from './shop';
import Contact from './contact';
import Account from './account';
import Cart from './cart';
import { ShopimageContext } from './shopimage';

function Connect() {
  return (
      <Routes>
        <Route path="/eccomercesite" element={<Home />} />
        <Route path="/shop1" element={<Shop1 />} />
        <Route path="/shop2" element={<Shop2 />} />
        <Route path="/shop3" element={<Shop3 />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
      </Routes>
  );
}

export default Connect;
