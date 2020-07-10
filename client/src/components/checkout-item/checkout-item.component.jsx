import React from 'react';
import { connect } from 'react-redux';
import Price from '../price/price.component';
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.actions';
import { AssetLocation } from '../../utils';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

export const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
  
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={AssetLocation(imageUrl)} alt={name} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer><Price price={price} /></TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);