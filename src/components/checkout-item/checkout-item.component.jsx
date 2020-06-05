import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

export const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <div className='value'>{quantity}</div>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);