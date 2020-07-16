import React from 'react';
import { shallow } from 'enzyme';
import { CollectionPage } from './collection.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

describe('CollectionPage', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Test'
    };

    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  test('should render the CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render the same number of CollectionItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});