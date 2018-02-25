import React from 'react';
import PropTypes from 'prop-types';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';
import Loading from '../Utils/Loader/Loading';
import './VideoList.css';

const VideoList = props => {
  const videos = props.videos.map(item => (
    <VideoThumbnail
      key={item.id.videoId}
      videoId={item.id.videoId}
      title={item.snippet.title}
      image={item.snippet.thumbnails.medium}
      onClickAddVideo={props.onClickAddVideo}
      onClickVideoThumbnail={props.onClickVideoThumbnail}
    />
  ));

  if (!props.isFetched) {
    return <Loading />;
  }

  return (
    <div className="wrapper">
      <div className="video-list">
        { videos }
      </div>
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    etag: PropTypes.string,
    id: PropTypes.object,
    kind: PropTypes.string,
    snippet: PropTypes.object,
  })).isRequired,
  isFetched: PropTypes.bool.isRequired,
  onClickAddVideo: PropTypes.func.isRequired,
  onClickVideoThumbnail: PropTypes.func.isRequired,
};

export default VideoList;
