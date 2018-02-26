import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import favoriteVideosReducer from './reducers/favoriteVideosReducer';
import historySearchReducer from './reducers/historySearchReducer';
import alertFavoriteExistReducer from './reducers/alertFavoriteExistReducer';
import videoPlayerReducer from './reducers/videoPlayerReducer';
import videosAPIReducer from './reducers/videosAPIReducer';

const reducers = combineReducers({
  history: historySearchReducer,
  favorites: favoriteVideosReducer,
  alert: alertFavoriteExistReducer,
  videoPlayer: videoPlayerReducer,
  videosAPI: videosAPIReducer,
});

const store = createStore(reducers, {}, applyMiddleware(createLogger(), promise()));
export default store;
// console.log(store.getState());
//
// store.subscribe(() => {
//   console.log(store.getState());
// });

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
