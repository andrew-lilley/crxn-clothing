import { CurrencyActionTypes } from './currency.types';

export const setCurrency = currency => ({
  type: CurrencyActionTypes.SET_CURRENCY,
  payload: currency
});

export const setCurrencyLangCode = langCode => ({
  type: CurrencyActionTypes.SET_CURRENCY_LANG_CODE,
  payload: langCode
});