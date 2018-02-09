import React from 'react';
import Video from './Video/Video'
import Loading from '../Utils/Loader/Loading';
import './VideoList.css';

const VideoList = props => {
  // console.log(props.data);
  if (!props.isFetched) {
    return <Loading />;
  }

  const videos = props.data.items.map(item => (
    <Video
      key={item.id.videoId}
      title={item.snippet.title}
      videoId={item.id.videoId}
    />
  ));

  return (
    <div className="wrapper">
      <div className="video-list">
        { videos }
      </div>
    </div>
  );
};

export default VideoList;
