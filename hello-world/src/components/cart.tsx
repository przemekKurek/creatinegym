import { Button } from '@mui/material';
import React, { FC } from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';


interface CartProps{
      heading: string;
      description: string;
      path: string;
    };


const Cart: FC<CartProps> = ({ heading, description, path}) => {
  const navigate = useNavigate();
  return (<div className='cart'>
    <div className='cart-heading'>{heading}</div>
    <p className='cart-description'>{description}</p>
    <Button className='cart-button' variant='contained' onClick = {() => navigate(path)}>
      Select
    </Button>
  </div>
);
};
export default Cart;