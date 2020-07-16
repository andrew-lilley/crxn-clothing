import React from 'react';
import { shallow } from 'enzyme';
import { CurrencySelector } from './currency-select.component';

describe('ErrorBoundary component', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      currency: 'default',
      dispatch: jest.fn()
    }
    wrapper = shallow(<CurrencySelector { ...mockProps } />);
  });

  test('should render CurrencySelector component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});