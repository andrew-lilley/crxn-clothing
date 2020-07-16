import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveCurrency } from '../../redux/currency/currency.selectors';
import { setCurrency, setCurrencyLangCode } from '../../redux/currency/currency.actions';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { rebuildCart } from '../../redux/cart/cart.actions';
import { CurrencySelectorContainer } from './currency-select.styles';

export const CurrencySelector = ({ currency, dispatch }) => {

  const options = [
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
    }
  ];

  return (
    <CurrencySelectorContainer 
      onClick={() => {
        dispatch(toggleCartHidden(true));
      }}
    >
      <Select 
        options={options} 
        value={{ label: currency }}
        placeholder=''
        onChange={(e) => {
          dispatch(rebuildCart(e.value));
          dispatch(setCurrency(e.label));
          dispatch(setCurrencyLangCode(e.value));
        }}
      />
    </CurrencySelectorContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currency: selectActiveCurrency
});

export default connect(mapStateToProps)(CurrencySelector);