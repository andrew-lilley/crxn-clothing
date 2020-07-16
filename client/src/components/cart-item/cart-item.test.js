import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

test('should render CartItem component', () => {
  const mockItem = {
    imageUrl: 'images/shop-img/sneakers/adidas-nmd.png',
    price: 220,
    name: 'Adidas NMD',
    quantity: 2
  };

  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});