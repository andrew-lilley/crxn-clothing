import { CurrencyActionTypes } from './currency.types';

import {
  setCurrency,
  setCurrencyLangCode
} from './currency.actions';

describe('setCurrency action', () => {
  test('should create the setCurrency action', () => {
    const mockCurrency = '€';
    const action = setCurrency(mockCurrency);
    expect(action).toEqual({
      type: CurrencyActionTypes.SET_CURRENCY,
      payload: mockCurrency
    });
  });
});

describe('setCurrencyLangCode action', () => {
  test('should create the setCurrencyLangCode action', () => {
    const mockCurrencyLangCode = 'de';
    const action = setCurrencyLangCode(mockCurrencyLangCode);
    expect(action).toEqual({
      type: CurrencyActionTypes.SET_CURRENCY_LANG_CODE,
      payload: mockCurrencyLangCode
    });
  });
});