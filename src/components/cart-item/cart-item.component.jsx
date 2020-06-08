import React from 'react';
import Price from '../price/price.component';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {

  return (
    <div className='cart-item'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='quantity'>{ quantity } x</span>
        <Price price={price} />
      </div>
    </div>
  )
}

export default CartItem;