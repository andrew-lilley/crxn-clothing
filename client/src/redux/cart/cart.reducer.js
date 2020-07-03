import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart, rebuildCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: action.payload ? action.payload : !state.hidden
      }
      
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }

    case CartActionTypes.REBUILD_CART:
      return {
        ...state,
        cartItems: rebuildCart(state.cartItems, action.payload)
      }

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload.item, action.payload.langCode)
      }

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }

    default:
      return state;
  }
}

export default cartReducer;