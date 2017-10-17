import * as action from './index';
const request = require('axios');

const GetVideosRequest = () => {
  return {
    type: action.VIDEOS_REQUEST
  }
};
const GetVideosSuccess = (res) => {
  return {
    type: action.VIDEOS_SUCCESS,
    payload: {
      data: (res.data && res.data.data) || []
    }
  }
}
const GetVideosFailure = () => {
  return {
    type: action.VIDEOS_FAILURE
  }
}

export default function GetVideos(sessionId, skip=0) {
  return (dispatch) => {
    dispatch(GetVideosRequest());
    console.log("REquest video")
    request.get(`/videos?sessionId=${sessionId}&skip=${skip}&limit=10`).then((response) => {
        if (response.data.status !== 'success') {
          throw new Error("Backend request failed");
        }
        console.log(response.data.data)
        dispatch(GetVideosSuccess(response));
      })
      .catch((err) => {
        console.log(err);
        dispatch(GetVideosFailure(err.response||{}));
      });
  };
}