export const addVideosAPI = payload => ({
  type: 'FETCH_VIDEOSAPI',
  payload: new Promise(resolve => {
    resolve(payload);
  }),
});

export const fetchData = bool => ({
  type: 'FETCH_DATA',
  payload: bool,
});
