import State from './state';
import * as Action from '../actions';

export default function reducer(state = State, action) {
  let newState;
  switch (action.type) {
    case Action.VIDEOS_REQUEST: {
      break;
    }
    case Action.VIDEOS_SUCCESS: {
      break;
    }
    case Action.VIDEOS_FAILURE: {
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
