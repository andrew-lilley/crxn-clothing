import React from 'react';
import { shallow } from 'enzyme';
import { Price } from './price.component';

describe('Price component', () => {

  test('should render Price component with no label', () => {
    const mockProps = {
      price: 100,
      label: '',
      langCode: 'en-gb'
    };
    const wrapper = shallow(<Price {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Price component with a label', () => {
    const mockProps = {
      price: 100,
      label: 'Total',
      langCode: 'en-gb'
    };
    const wrapper = shallow(<Price {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Price component with default langCode', () => {
    const mockProps = {
      price: 100,
      label: '',
      langCode: 'default'
    };
    const wrapper = shallow(<Price {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

});
