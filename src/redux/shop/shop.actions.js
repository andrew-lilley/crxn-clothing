import { ShopActionTypes } from './shop.types';

export const setShopData = langCode => ({
  type: ShopActionTypes.SET_SHOP_DATA,
  payload: langCode
});