import * as action from './index';
const request = require('axios');

const setRatingRequest = () => {
  return {
    type: action.VIDEO_RATING_REQUEST,
  }
}
const setRatingSuccess = (data) => {
  return {
    type: action.VIDEO_RATING_SUCCESS,
    payload: {
      data,
    }
  }
}
const setRatingFailure = () => {
  return {
    type: action.VIDEO_RATING_FAILURE,
  }
}


export default function setRating(rating, sessionId, videoId) {
  return (dispatch) => {
    dispatch(setRatingRequest());
    request.post(`/video/ratings?sessionId=${sessionId}`,
      {
        videoId,
        rating,
      }).then((response) => {
        const data = response.data;
        if (data.status !== 'success') {
          throw new Error('Failed to set rating..')
        }
        dispatch(setRatingSuccess(data.data));
    }).catch(err => dispatch(setRatingFailure()));
  }
}
