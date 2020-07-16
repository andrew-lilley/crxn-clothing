import UserActionTypes from './user.types';

import {
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailure,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure
} from './user.actions';

describe('googleSignInStart action', () => {
  test('should create the googleSignInStart action', () => {
    const action = googleSignInStart();
    expect(action).toEqual({
      type: UserActionTypes.GOOGLE_SIGN_IN_START
    });
  });
});

describe('emailSignInStart action', () => {
  test('should create the emailSignInStart action', () => {
    const mockEmailAndPassword = {
      email: 'a@test.com', 
      password: '123456'
    };
    const action = emailSignInStart(mockEmailAndPassword);
    expect(action).toEqual({
      type: UserActionTypes.EMAIL_SIGN_IN_START,
      payload: mockEmailAndPassword
    });
  });
});

describe('signInSuccess action', () => {
  test('should create the signInSuccess action', () => {
    const mockUser = {
      id: 1,
      name: 'Andrew'
    };
    const action = signInSuccess(mockUser);
    expect(action).toEqual({
      type: UserActionTypes.SIGN_IN_SUCCESS,
      payload: mockUser
    });
  });
});

describe('signInFailure action', () => {
  test('should create the signInFailure action', () => {
    const mockError = 'Error';
    const action = signInFailure(mockError);
    expect(action).toEqual({
      type: UserActionTypes.SIGN_IN_FAILURE,
      payload: mockError
    });
  });
});

describe('checkUserSession action', () => {
  test('should create the checkUserSession action', () => {
    const action = checkUserSession();
    expect(action).toEqual({
      type: UserActionTypes.CHECK_USER_SESSION
    });
  });
});

describe('signOutStart action', () => {
  test('should create the signOutStart action', () => {
    const action = signOutStart();
    expect(action).toEqual({
      type: UserActionTypes.SIGN_OUT_START
    });
  });
});

describe('signOutSuccess action', () => {
  test('should create the signOutSuccess action', () => {
    const action = signOutSuccess();
    expect(action).toEqual({
      type: UserActionTypes.SIGN_OUT_SUCCESS
    });
  });
});

describe('signOutFailure action', () => {
  test('should create the signOutFailure action', () => {
    const action = signOutFailure();
    expect(action).toEqual({
      type: UserActionTypes.SIGN_OUT_FAILURE
    });
  });
});

describe('signUpStart action', () => {
  test('should create the signUpStart action', () => {
    const mockUserCredentials = {
      displayName: 'Andrew', 
      email: 'a@test.com', 
      password: '123456'
    };
    const action = signUpStart(mockUserCredentials);
    expect(action).toEqual({
      type: UserActionTypes.SIGN_UP_START,
      payload: mockUserCredentials
    });
  });
});

describe('signUpSuccess action', () => {
  test('should create the signUpSuccess action', () => {
    const mockUser = {
      user: 'Andrew',
      additionalData: {
        displayName: 'Andrew',
        email: 'a@test.com',
      }
    };

    const action = signUpSuccess(mockUser);
    expect(action).toEqual({
      type: UserActionTypes.SIGN_UP_SUCCESS,
      payload: mockUser
    });
  });
});

describe('signUpFailure action', () => {
  test('should create the signUpFailure action', () => {
    const mockError = 'Error';
    const action = signUpFailure(mockError);
    expect(action).toEqual({
      type: UserActionTypes.SIGN_UP_FAILURE,
      payload: mockError
    });
  });
});