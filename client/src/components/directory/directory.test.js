import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './directory.component';

test('should render Directory component', () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});