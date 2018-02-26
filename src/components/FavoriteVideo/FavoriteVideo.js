import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FavoriteVideo.css';

class FavoriteVideo extends Component {
  onClickFavoriteVideo = () => {
    this.props.onHandleVideoPlayer({
      videoId: this.props.videoId,
      title: this.props.title,
    });
  }

  render() {
    return (
      <button
        className="favorite-video"
        onClick={this.onClickFavoriteVideo}
      >
        {this.props.title}
      </button>
    );
  }
}

FavoriteVideo.propTypes = {
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  onHandleVideoPlayer: PropTypes.func.isRequired,
};

export default FavoriteVideo;
