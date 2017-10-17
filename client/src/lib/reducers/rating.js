import State from './state';
import * as Action from '../actions';

export default function reducer(state = State, action) {
  let newState;
  switch (action.type) {
    case Action.VIDEO_RATING_REQUEST: {
      break;
    }
    case Action.VIDEO_RATING_SUCCESS: {
      break;
    }
    case Action.VIDEO_RATING_FAILURE: {
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
