import { CurrencyActionTypes } from './currency.types';
import currencyReducer from './currency.reducer';

const initialState = {
  langCode: 'en-gb',
  currency: '£'
};

describe('currencyReducer', () => {
  test('should return initial state', () => {
    expect(currencyReducer(undefined, {})).toEqual(initialState);
  });

  test('should set currency to € if payload currency is €', () => {
    const mockCurrency = '€';
    const newState = currencyReducer(initialState, {
      type: CurrencyActionTypes.SET_CURRENCY,
      payload: mockCurrency
    });

    expect(newState).toEqual({
      ...initialState,
      currency: mockCurrency
    })
  });

  test('should set langCode tode if payload langCode is de', () => {
    const mockLangCode = 'de';
    const newState = currencyReducer(initialState, {
      type: CurrencyActionTypes.SET_CURRENCY_LANG_CODE,
      payload: mockLangCode
    });

    expect(newState).toEqual({
      ...initialState,
      langCode: mockLangCode
    })
  });

});