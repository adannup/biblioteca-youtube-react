import React from 'react';
import PropTypes from 'prop-types';
import AddFavoriteVideo from '../Controls/AddFavoriteVideo';
import './Video.css';

const VideoThumbnail = props => (
  <div className="video">
    <img
      className="iframe-video"
      alt={props.title}
      title={props.title}
      key={props.videoId}
      src={props.image.url}
    />
    <AddFavoriteVideo
      title={props.title}
      videoId={props.videoId}
      onClickAddVideo={props.onClickAddVideo}
      // onClickAddVideo={props.onClickAddVideo.bind(this, props.title)}
      // onClickAddVideo={() => props.onClickAddVideo(props.title)}
    />
  </div>
);

VideoThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  onClickAddVideo: PropTypes.func.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
};

export default VideoThumbnail;
