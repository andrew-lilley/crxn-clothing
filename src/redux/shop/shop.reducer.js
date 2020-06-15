import SHOP_DATA from './shop.data';
import { selectShopData } from './shop.utils';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SHOP_DATA':
      return {
        ...state,
        collections: selectShopData(action.payload)
      }
    default:
      return state;
  }
};

export default shopReducer;