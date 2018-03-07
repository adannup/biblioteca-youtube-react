import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../buttons/styles/buttons-control.css';

class FavoriteAddVideoButton extends Component {
  handleAddVideo = () => {
    this.props.onClickAddVideo({
      title: this.props.title,
      videoId: this.props.videoId,
    });
  }

  render() {
    return <button className="button-control" onClick={this.handleAddVideo}>+</button>;
  }
}

FavoriteAddVideoButton.propTypes = {
  onClickAddVideo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default FavoriteAddVideoButton;
