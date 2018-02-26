const initialState = {
  isFetched: false,
  videos: [],
};

const videosAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_FETCHED':
      return {
        isFetched: action.isFetched,
        videos: action.videos,
      };
    default:
      return state;
  }
};

module.exports = videosAPIReducer;
