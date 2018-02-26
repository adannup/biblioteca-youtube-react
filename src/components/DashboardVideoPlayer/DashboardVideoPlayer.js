import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import ReturnButton from '../Controls/ReturnButton';
import AddFavoriteVideo from '../Controls/AddFavoriteVideo';
import './DashboardVideoPlayer.css';

const DashboardVideoPlayer = props => (
  <div className="container-dashboard-video-player">
    <div className="dashboard-video-player">
      <VideoPlayer
        video={props.video}
      />
      <div className="container-buttons">
        <div className="col-md-6">
          <ReturnButton
            onClickReturnButton={props.onClickReturnButton}
          />
        </div>
        <div className="col-md-6">
          <AddFavoriteVideo
            title={props.video.title}
            videoId={props.video.videoId}
            onClickAddVideo={props.onClickAddVideo}
          />
        </div>
      </div>
    </div>
  </div>
);

DashboardVideoPlayer.propTypes = {
  onClickReturnButton: PropTypes.func.isRequired,
  video: PropTypes.shape({
    title: PropTypes.string,
    videoId: PropTypes.string,
  }).isRequired,
  onClickAddVideo: PropTypes.func.isRequired,
};

export default DashboardVideoPlayer;
