import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './cart-icon.component';

describe('CartIcon component', () => {
  let wrapper;
  let mockToggleCartHidden;
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  test('should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartContainer').simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  test('should render the itemCount as the text', () => {
    const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
    expect(itemCount).toBe(0);
  });
});