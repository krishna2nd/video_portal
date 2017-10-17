import State from './state';
import * as Action from '../actions';

export default function reducer(state = State, action) {
  let newState;
  switch (action.type) {
    case Action.USER_LOGIN_REQUEST: {
      newState = {
        ...state
      };
      break;
    }
    case Action.USER_LOGIN_SUCCESS: {
      newState = {
        ...state
      };
      newState.user = {
        sessionId: action.payload.sessionId,
        userName: action.payload.username,
      }; 
      window.Cookies.set('userName', action.payload.username);
      window.Cookies.set('sessionId', action.payload.sessionId);
      break;
    }
    case Action.USER_LOGIN_FAILURE: {
      newState = {
        ...state
      };
      newState.error.login = true;
      break;
    }
    case Action.USER_LOGOUT_REQUEST: {
      newState = {
        ...state
      }
      break;
    }
    case Action.USER_LOGOUT_SUCCESS: {
      newState = {
        ...state
      }
      newState.user.sessionId = undefined;
      newState.user.userName = undefined;
      window.Cookies.remove('userName');
      window.Cookies.remove('sessionId');
      break;
    }
    case Action.USER_LOGOUT_FAILURE: {
      newState = {
        ...state
      }
      newState.error.logout = true;
      break;
    }

    case Action.VIDEO_REQUEST: {
      newState = {
        ...state,
        loading: true,
      }
      break;
    }
    case Action.VIDEO_SUCCESS: {
      const  video = action.payload.data;
      newState = {
        ...state,
        playing: video,
        loading: false,
      };

      break;
    }
    case Action.VIDEOS_FAILURE: {
      newState = {
        ...state,
        error: {
          ...state.error,
          video : true,
        },
        loading: false,
      }
      break;
    }

    case Action.VIDEOS_REQUEST: {
      newState = {
        ...state,
        loading: true,
      }
      break;
    }
    case Action.VIDEOS_SUCCESS: {
      const  videos = action.payload.data;
      const  newList = new Map(state.videos);
      videos.forEach(video => newList.set(video._id, video));
      newState = {
        ...state,
        videos: newList,
        skip: (state.skip || 0) + videos.length,
        loading: false,
      };

      break;
    }
    case Action.VIDEOS_FAILURE: {
      newState = {
        ...state,
        error: {
          ...state.error,
          videos : true,
        },
        loading: false,
      }
      break;
    }
    case Action.VIDEO_RATING_REQUEST: {
      newState = {
        ...state
      };
      break;
    }
    case Action.VIDEO_RATING_SUCCESS: {
      newState = {
        ...state
      };
      const video = action.payload.data;
      newState.videos.set(video._id, video);
      break;
    }
    case Action.VIDEO_RATING_FAILURE: {
      newState = {
        ...state
      };
      newState.error.rating = true;
      break;
    }

    default: {
      newState = {
        ...state
      }
    }
  }
  return newState;
}
