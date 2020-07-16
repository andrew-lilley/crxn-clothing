import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

describe('Header component', () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '123'
      },
      signOutStart: mockSignOutStart
    };

    wrapper = shallow(<Header { ...mockProps } />);
  });

  test('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('if currentUser is present', () => {
    test('should render sign out link', () => {
      expect(
        wrapper
          .find('OptionLink')
          .at(1)
          .text()
      ).toBe('SIGN OUT');
    });

    test('should call signOutStart method when link is clicked', () => {
      wrapper
        .find('OptionLink')
        .at(1)
        .simulate('click');

      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe('if currentUser is null', () => {
    test('should render sign in link', () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header { ...mockProps } />);

      expect(
        newWrapper
          .find('OptionLink')
          .at(1)
          .text()
      ).toBe('SIGN IN');
    });
  });

  describe('if hidden is true', () => {
    test('should not render CartDropdown', () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe('if currentUser is null', () => {
    test('should render CartDropdown', () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header { ...mockProps } />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});