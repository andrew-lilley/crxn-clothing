import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveCurrencyLangCode, selectActiveCurrency } from '../../redux/currency/currency.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { setCurrency, setCurrencyLangCode } from '../../redux/currency/currency.actions';
import { setShopData } from '../../redux/shop/shop.actions';
import { CurrencySelectorContainer } from './currency-select.styles';

const CurrencySelector = ({ cartItems, langCode, currency, dispatch }) => {

  let options = [
    { 
      value: 'default', 
      label: '$' 
    },
    { 
      value: 'en-gb', 
      label: '£' 
    },
    { 
      value: 'de', 
      label: '€' 
    },
  ];

  // For now, do not allow the currency to be changed once an
  // item has been added to the cart. The static data does not 
  // really lend itself to a cart rebuild process.
  if (cartItems.length) {
    options = [
      {
        value: langCode,
        label: currency
      }
    ]
  }

  return (
    <CurrencySelectorContainer>
      <Select 
        options={options} 
        value={{ label: currency }}
        placeholder=''
        onChange={(e) => {
          dispatch(setShopData(e.value));
          dispatch(setCurrency(e.label));
          dispatch(setCurrencyLangCode(e.value));
        }}
        onLoad={dispatch(setShopData(langCode))}
      />
    </CurrencySelectorContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  langCode: selectActiveCurrencyLangCode,
  currency: selectActiveCurrency,
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CurrencySelector);