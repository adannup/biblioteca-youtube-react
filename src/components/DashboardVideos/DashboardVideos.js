import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/Search';
import VideoList from '../VideoList/VideoList';
import DashboardVideoPlayer from '../DashboardVideoPlayer/DashboardVideoPlayer';
import './DashboardVideos.css';

class DashboardVideos extends Component {
  state = {
    isVideoPlayer: false,
    video: {},
  }

  onHandleVideoPlayer = video => {
    this.setState({
      isVideoPlayer: true,
      video,
    });
  }

  onCloseVideoPlayer = () => {
    this.setState({
      isVideoPlayer: false,
      video: {},
    });
  }

  render() {
    return (
      <div className="dashboard-videos">
        { this.state.isVideoPlayer ? (
          <DashboardVideoPlayer
            video={this.state.video}
            onClickReturnButton={this.onCloseVideoPlayer}
            onClickAddVideo={this.props.onClickAddVideo}
          />
        ) : (
          <React.Fragment>
            <Search onChange={this.props.onChangeSearch} />
            <VideoList
              videos={this.props.videos}
              isFetched={this.props.isFetched}
              onClickAddVideo={this.props.onClickAddVideo}
              onClickVideoThumbnail={this.onHandleVideoPlayer}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

DashboardVideos.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    etag: PropTypes.string,
    id: PropTypes.object,
    kind: PropTypes.string,
    snippet: PropTypes.object,
  })).isRequired,
  isFetched: PropTypes.bool.isRequired,
  onClickAddVideo: PropTypes.func.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

export default DashboardVideos;
