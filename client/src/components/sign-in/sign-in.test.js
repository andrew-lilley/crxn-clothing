import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from './sign-in.component';

describe('SignIn component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });

  test('should render SignIn component', () => {
    expect(wrapper).toMatchSnapshot();
  });

});