import * as action from './index';
const md5 = require('blueimp-md5/js/md5.js');
const request = require('axios');

function LoginUserRequest() {
  return {
    type: action.USER_LOGIN_REQUEST,
    payload: {}
  }
}

function LoginUserFailure() {
  return {
    type: action.USER_LOGIN_FAILURE,
    payload: {}
  }
}

function LoginUserSuccess(response) {
  console.log(response);
  return {
    type: action.USER_LOGIN_SUCCESS,
    payload: response.data,
  }
}

function LogOutUserRequest() {
  return {
    type: action.USER_LOGOUT_REQUEST,
    payload: {}
  }
}

function LogOutUserFailure() {
  return {
    type: action.USER_LOGOUT_FAILURE,
    payload: {}
  }
}

function LogOutUserSuccess(response) {
  console.log(response);
  return {
    type: action.USER_LOGOUT_SUCCESS,
    payload: response.data,
  }
}

export function LoginUser(user, password, props) {
  return (dispatch) => {
    dispatch(LoginUserRequest());
    request.post(`/user/auth`, {
        username: user,
        password: md5(password),
      }).then((response) => {
        dispatch(LoginUserSuccess(response));
        props.history.push('/list');
      })
      .catch((err) => {
        console.log(err);
        dispatch(LoginUserFailure(err.response||{}));
      });
  };
}

export function LogOutUser(sessionId, props) {
  return (dispatch) => {
    dispatch(LogOutUserRequest());
    request.get(`/user/logout`, {
        sessionId: sessionId
      }).then((response) => {
        dispatch(LogOutUserSuccess(response));
        props.history.push('/login');
      })
      .catch((err) => {
        console.log(err);
        dispatch(LogOutUserFailure(err.response||{}));
      });
  };
}