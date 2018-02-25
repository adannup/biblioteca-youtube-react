import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFavoriteVideo from '../Controls/AddFavoriteVideo';
import './VideoThumbnail.css';

class VideoThumbnail extends Component {
  onHandleVideoPlayer = e => {
    e.preventDefault();
    this.props.onClickVideoThumbnail({
      videoId: this.props.videoId,
      title: this.props.title,
    });
  }

  render() {
    return (
      <div className="video-thumbnail">
        <a onClick={this.onHandleVideoPlayer} href="true">
          <img
            className="img-thumbnail"
            alt={this.props.title}
            title={this.props.title}
            key={this.props.videoId}
            src={this.props.image.url}
          />
        </a>
        <AddFavoriteVideo
          title={this.props.title}
          videoId={this.props.videoId}
          onClickAddVideo={this.props.onClickAddVideo}
          // onClickAddVideo={props.onClickAddVideo.bind(this, props.title)}
          // onClickAddVideo={() => props.onClickAddVideo(props.title)}
        />
      </div>
    );
  }
}

VideoThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  onClickAddVideo: PropTypes.func.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  onClickVideoThumbnail: PropTypes.func.isRequired,
};

export default VideoThumbnail;
