import CartActionTypes from './cart.types';
import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItem,
  clearCart,
  rebuildCart
} from './cart.actions';

describe('toggleCartHidden action', () => {
  test('should create the toggleHidden action', () => {
    const mockToggle = true;
    const action = toggleCartHidden();
    expect(action).toEqual({
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
      payload: !mockToggle
    });
  });
});

describe('addItem action', () => {
  test('should create the addItem action', () => {
    const mockItem = {
      id: 1
    };
    const mockLangCode = 'en-gb';

    const action = addItem(mockItem, mockLangCode);
    expect(action).toEqual({
      type: CartActionTypes.ADD_ITEM,
      payload: {
        item: mockItem,
        langCode: mockLangCode
      }
    });
  });
});

describe('removeItem action', () => {
  test('should create the removeItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = removeItem(mockItem);

    expect(action).toEqual({
      type: CartActionTypes.REMOVE_ITEM,
      payload: mockItem
    });
  });
});

describe('clearItemFromCart action', () => {
  test('should create the clearItemFromCart action', () => {
    const mockItem = {
      id: 1
    };

    const action = clearItem(mockItem);

    expect(action).toEqual({
      type: CartActionTypes.CLEAR_ITEM_FROM_CART,
      payload: mockItem
    });
  });
});

describe('clearCart action', () => {
  test('should create the clearCart action', () => {
    const action = clearCart();
    expect(action).toEqual({
      type: CartActionTypes.CLEAR_CART
    });
  });
});

describe('rebuildCart action', () => {
  test('should create the rebuildCart action', () => {
    const mockLangCode = 'en-gb';
    const action = rebuildCart(mockLangCode);
    expect(action).toEqual({
      type: CartActionTypes.REBUILD_CART,
      payload: mockLangCode
    });
  });
})