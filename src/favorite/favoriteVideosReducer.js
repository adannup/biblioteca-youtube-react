const initialState = {
  videos: [],
  verifyExistence: {
    exist: false,
    video: {},
  },
};

const favoriteVideosreducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_VIDEO': {
      const favoriteExist = state.videos.filter(s => s.videoId === action.video.videoId);
      if (favoriteExist.length === 0) {
        return { ...state, videos: [...state.videos, action.video] };
      }
      return Object.assign({}, state, {
        alert: true,
      });
    }
    default:
      return state;
  }
};

module.exports = favoriteVideosreducer;
