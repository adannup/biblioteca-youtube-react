import React, { Component } from 'react';

class Controls extends Component {
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

export default Controls;
