import { createSelector } from 'reselect';

const selectCurrency = state => state.currency;

export const selectActiveCurrencyLangCode = createSelector(
  [selectCurrency],
  currency => currency.langCode
);

export const selectActiveCurrency = createSelector(
  [selectCurrency],
  currency => currency.currency
);