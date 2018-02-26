export const openVideoPlayer = video => ({
  type: 'OPEN_VIDEO_PLAYER',
  video,
});

export const closeVideoPlayer = () => ({
  type: 'CLOSE_VIDEO_PLAYER',
});
