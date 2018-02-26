const favoriteVideosreducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_VIDEO': {
      const video = {
        title: action.title,
        videoId: action.videoId,
      };
      return [...state, video];
    }
    default:
      return state;
  }
};

module.exports = favoriteVideosreducer;
// export default favoriteVideosreducer;
