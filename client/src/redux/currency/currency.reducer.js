import { CurrencyActionTypes } from './currency.types';

const INITIAL_STATE = {
  langCode: 'en-gb',
  currency: '£'
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrencyActionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      }

    case CurrencyActionTypes.SET_CURRENCY_LANG_CODE:
      return {
        ...state,
        langCode: action.payload
      }

    default:
      return state;
  }
};

export default currencyReducer;