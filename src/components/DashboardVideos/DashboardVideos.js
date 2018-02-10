import React, { Component } from 'react';
import Search from '../Search/Search';
import VideoList from '../VideoList/VideoList';
import './DashboardVideos.css';

class DashboardVideos extends Component {
  render() {
    const { data, isFetched, onClickAddVideo } = this.props;

    return (
      <div className="dashboard-videos">
        <Search onChange={this.props.onChangeSearch} />
        <VideoList
          data={data}
          isFetched={isFetched}
          onClickAddVideo={onClickAddVideo}
        />
      </div>
    );
  }
}

export default DashboardVideos;
