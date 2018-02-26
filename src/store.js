const { createStore, combineReducers, applyMiddleware } = require('redux');
const favoriteVideosReducer = require('./reducers/favoriteVideosReducer');
const historySearchReducer = require('./reducers/historySearchReducer');
const alertFavoriteExistReducer = require('./reducers/alertFavoriteExistReducer');
const videoPlayerReducer = require('./reducers/videoPlayerReducer');
const videosAPIReducer = require('./reducers/videosAPIReducer');

const reducers = combineReducers({
  history: historySearchReducer,
  favorites: favoriteVideosReducer,
  alert: alertFavoriteExistReducer,
  videoPlayer: videoPlayerReducer,
  videosAPI: videosAPIReducer,
});

const store = createStore(reducers);
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'ADD_FAVORITE_VIDEO',
//   title: 'video name',
//   videoId: '123456aasdfg',
// });
//
// store.dispatch({
//   type: 'ADD_FAVORITE_VIDEO',
//   title: 'Video1',
//   videoId: '123456aasdfg',
// });
//
// store.dispatch({
//   type: 'ADD_VIDEO_HISTORY_SEARCH',
//   title: 'Busqueda',
// });
//
// store.dispatch({
//   type: 'ENABLE_ALERT_FAVORITE_EXIST',
//   video: {
//     title: 'Video1',
//     videoId: '12345asdfg567',
//   },
// });
