import SHOP_DATA from './shop.data';
import SHOP_DATA_EUR from './shop.data.eur';
import SHOP_DATA_GBP from './shop.data.gbp';

export const selectShopData = (langCode) => {
  switch (langCode) {
    case 'en-gb':
      return SHOP_DATA_GBP;
    case 'de':
      return SHOP_DATA_EUR;
    default:
      return SHOP_DATA;
  }
}