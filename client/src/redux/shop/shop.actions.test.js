import ShopActionTypes from './shop.types';
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

describe('fetchCollectionsStart action', () => {
  test('should create the fetchCollectionsStart action', () => {
    const action = fetchCollectionsStart();
    expect(action).toEqual({
      type: ShopActionTypes.FETCH_COLLECTIONS_START
    });
  });
});

describe('fetchCollectionsSuccess action', () => {
  test('should create the fetchCollectionsSuccess action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1
      }
    };

    const action = fetchCollectionsSuccess(mockCollectionsMap);
    expect(action).toEqual({
      type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
      payload: mockCollectionsMap
    });
  });
});

describe('fetchCollectionsFailure action', () => {
  test('should create the fetchCollectionsFailure action', () => {
    const mockError = 'errered';
    
    const action = fetchCollectionsFailure(mockError);

    expect(action).toEqual({
      type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
      payload: mockError
    });
  });
});