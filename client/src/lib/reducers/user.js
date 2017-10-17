import State from './state';
import * as Action from '../actions';

export default function reducer(state = State, action) {
  let newState;
  switch (action.type) {
    case Action.USER_LOGIN_REQUEST: {
      break;
    }
    case Action.USER_LOGIN_SUCCESS: {
      break;
    }
    case Action.USER_LOGIN_FAILURE: {
      break;
    }
    case Action.USER_LOGOUT_REQUEST: {
      break;
    }
    case Action.USER_LOGOUT_SUCCESS: {
      break;
    }
    case Action.USER_LOGOUT_FAILURE: {
      break;
    }
    default: {
      newState = {
        ...State
      }
    }
  }
  return newState;
}
