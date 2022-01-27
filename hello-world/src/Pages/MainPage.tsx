import React from 'react';
import Cart from '../components/cart';
import { cartData, carts } from './constants';
import './MainPage.css';

const MainPage = (): JSX.Element => {
  return (
    <div className='carts-container'>
      {carts.map((item: cartData) => (
        <Cart key={item.heading + Math.random()} heading={item.heading} description={item.description} path={item.path} />
      ))}
    </div>
  );
};

export default MainPage;
