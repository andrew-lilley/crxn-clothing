import React from 'react';
import { shallow } from 'enzyme';
import { CollectionItem } from './collection-item.component';

describe('CollectionItem component', () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = 'images/shop-img/sneakers/adidas-nmd.png';
  const mockName = 'Adidas NMD';
  const mockPrice = 220;

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName
      },
      addItem: mockAddItem
    };

    wrapper = shallow(<CollectionItem { ...mockProps } />);
  });

  test('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call addItem when AddButton clicked', () => {
    wrapper.find('AddButton').simulate('click');

    expect(mockAddItem).toHaveBeenCalled();
  });

});