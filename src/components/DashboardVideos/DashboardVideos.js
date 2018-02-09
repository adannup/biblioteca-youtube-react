import React, { Component } from 'react';
import Search from '../Search/Search';
import VideoList from '../VideoList/VideoList';
import './DashboardVideos.css';

class DashboardVideos extends Component {
  render() {
    return (
      <div className="dashboard-videos">
        <Search onChange={this.props.onChangeSearch} />
        <VideoList
          data={this.props.data}
          isFetched={this.props.isFetched}
        />
      </div>
    );
  }
}

export default DashboardVideos;
