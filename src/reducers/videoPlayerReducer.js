const initialState = {
  isOpen: false,
  video: {},
};

const videoPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_VIDEO_PLAYER':
      return {
        isOpen: true,
        video: action.video,
      };
    default:
      return state;
  }
};

module.exports = videoPlayerReducer;
