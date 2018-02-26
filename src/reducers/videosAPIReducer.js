const initialState = {
  isFetched: false,
  videos: [],
};

const videosAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOSAPI_FULFILLED':
      return Object.assign({}, state, {
        videos: action.payload,
      });
    case 'FETCH_DATA':
      return Object.assign({}, state, {
        isFetched: action.payload,
      });
    default:
      return state;
  }
};

module.exports = videosAPIReducer;
