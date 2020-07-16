import React from 'react';
import { withRouter } from 'react-router-dom';
import { AssetLocation } from '../../utils';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

export const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (

  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer style={{
        backgroundImage: `url(${AssetLocation(imageUrl)})`
      }} 
    />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);