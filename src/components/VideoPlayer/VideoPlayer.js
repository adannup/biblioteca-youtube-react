import React from 'react';
import PropTypes from 'prop-types';
import './VideoPlayer.css';

const VideoPlayer = ({ video }) => (
  <div className="video-player">
    <div className="video-wrapper">
      <iframe
        className="iframe-video"
        title={video.title}
        key={video.videoId}
        type="text/html"
        src={`https://www.youtube.com/embed/${video.videoId}?rel=0&autoplay=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </div>
);

VideoPlayer.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string,
    videoId: PropTypes.string,
  }).isRequired,
};

export default VideoPlayer;
