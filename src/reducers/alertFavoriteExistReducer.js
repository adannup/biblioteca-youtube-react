const alertFavoriteExistReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ENABLE_ALERT_FAVORITE_EXIST':
      return {
        active: true,
        favoriteVideo: action.video,
      };
    case 'DISABLE_ALERT_FAVORITE_EXIST':
      return {
        active: false,
        favoriteVideo: {},
      };
    default:
      return state;
  }
};

module.exports = alertFavoriteExistReducer;
