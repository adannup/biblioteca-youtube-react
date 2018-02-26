const favoriteVideosreducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_VIDEO': {
      return [...state, action.video];
    }
    default:
      return state;
  }
};

module.exports = favoriteVideosreducer;
// export default favoriteVideosreducer;
