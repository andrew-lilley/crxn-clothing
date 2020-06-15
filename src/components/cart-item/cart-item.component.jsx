import React from 'react';
import Price from '../price/price.component';
import { CartItemContainer, ItemDetailsContainer, CartItemImage } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>{quantity} x <Price price={price} /></span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default CartItem;