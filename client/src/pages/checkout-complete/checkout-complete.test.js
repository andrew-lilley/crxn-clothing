import React from 'react';
import { shallow } from 'enzyme';
import CheckoutCompletePage from './checkout-complete.component';

test('should render CheckoutCompletePage component', () => {
  const wrapper = shallow(<CheckoutCompletePage />);
  expect(wrapper).toMatchSnapshot();
});