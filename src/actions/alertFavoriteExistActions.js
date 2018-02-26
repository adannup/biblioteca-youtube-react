export const displayAlertFavoriteExist = action => ({
  type: 'ENABLE_ALERT_FAVORITE_EXIST',
  video: action.video,
});

export const disableAlertFavoriteExist = () => ({
  type: 'DISABLE_ALERT_FAVORITE_EXIST',
});
