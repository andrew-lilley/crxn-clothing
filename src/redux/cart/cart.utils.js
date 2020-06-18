import { applyFxRate } from '../currency/currency.util';

export const addItemToCart = (cartItems, cartItemToAdd, langCode) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id 
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  return [
    ...cartItems, 
    { 
      ...cartItemToAdd, 
      quantity: 1, 
      default_price: cartItemToAdd.price,
      price: applyFxRate(cartItemToAdd.price, langCode)
    }
  ]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  // Check if the qty is 1. If so, we need to remove it from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      cartItem => cartItem.id !== cartItemToRemove.id
    )
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
};

export const rebuildCart = (cartItems, langCode) => {
  return cartItems.map(cartItem => 
    cartItem.quantity > 0
      ? { ...cartItem, price: applyFxRate(cartItem.default_price, langCode) }
      : cartItem
  )    
}