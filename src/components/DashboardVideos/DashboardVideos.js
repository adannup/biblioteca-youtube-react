import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/Search';
import VideoList from '../VideoList/VideoList';
import './DashboardVideos.css';

const DashboardVideos = props => (
  <div className="dashboard-videos">
    <Search onChange={props.onChangeSearch} />
    <VideoList
      videos={props.videos}
      isFetched={props.isFetched}
      onClickAddVideo={props.onClickAddVideo}
      onClickVideoThumbnail={props.onHandleVideoPlayer}
    />
  </div>
);

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
  onHandleVideoPlayer: PropTypes.func.isRequired,
};

export default DashboardVideos;
