import * as action from './index';
const request = require('axios');

const GetVideoRequest = () => {
  return {
    type: action.VIDEO_REQUEST
  }
};
const GetVideoSuccess = (res) => {
  return {
    type: action.VIDEO_SUCCESS,
    payload: {
      data: (res.data && res.data.data) || []
    }
  }
}
const GetVideoFailure = () => {
  return {
    type: action.VIDEO_FAILURE
  }
}

export default function GetVideo(sessionId, videoId) {
  return (dispatch) => {
    dispatch(GetVideoRequest());
    console.log("Request video")
    request.get(`/video?sessionId=${sessionId}&videoId=${videoId}`).then((response) => {
        if (response.data.status !== 'success') {
          throw new Error("Server request failed");
        }
        console.log(response.data.data)
        dispatch(GetVideoSuccess(response));
      })
      .catch((err) => {
        console.log(err);
        dispatch(GetVideoFailure(err.response||{}));
      });
  };
}