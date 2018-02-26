export const addVideosAPI = payload => ({
  type: 'FETCH_VIDEOSAPI',
  payload,
});

export const fetchData = bool => ({
  type: 'FETCH_DATA',
  payload: bool,
});
