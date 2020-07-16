import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './error-boundary.component';
import HomePage from '../../pages/homepage/homepage.component';

describe('ErrorBoundary component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorBoundary><HomePage /></ErrorBoundary>);
  });

  test('should render ErrorBoundary component with no error', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ErrorBoundary component with an error', () => {
    wrapper.setState({ hasErrored: true });
    expect(wrapper).toMatchSnapshot();
  });

});