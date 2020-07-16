import CartActionTypes from './cart.types';

export const toggleCartHidden = (toggle = false) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: toggle
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const rebuildCart = langCode => ({
  type: CartActionTypes.REBUILD_CART,
  payload: langCode
});

export const addItem = (item, langCode) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: {
    item,
    langCode
  }
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItem = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});