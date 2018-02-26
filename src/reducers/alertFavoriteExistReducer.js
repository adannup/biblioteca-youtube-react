const intialState = {
  active: false,
  favoriteVideo: {},
};

const alertFavoriteExistReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'ENABLE_ALERT_FAVORITE_EXIST':
      return {
        active: true,
        favoriteVideo: action.video,
      };
    case 'DISABLE_ALERT_FAVORITE_EXIST':
      return state;
    default:
      return state;
  }
};

module.exports = alertFavoriteExistReducer;
