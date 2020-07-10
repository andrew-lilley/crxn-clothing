import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveCurrencyLangCode } from '../../redux/currency/currency.selectors';
import { applyFxRate } from '../../redux/currency/currency.util'; 
import { addItem } from '../../redux/cart/cart.actions';
import Price from '../../components/price/price.component';
import { AssetLocation } from '../../utils';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

export const CollectionItem = ({ item, addItem, langCode }) => {

  const { name, price, imageUrl } = item;

  const sale_price = applyFxRate(price, langCode);

  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${AssetLocation(imageUrl)})`
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer><Price price={sale_price} /></PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item, langCode)} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  langCode: selectActiveCurrencyLangCode
});

const mapDispatchToProps = dispatch => ({
  addItem: (item, langCode) => dispatch(addItem(item, langCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);