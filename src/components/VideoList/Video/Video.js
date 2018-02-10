import React from 'react';
import Controls from './Controls';
import './Video.css';

const Video = props => (
  <div className="video">
    <iframe
      className="iframe-video"
      title={props.title}
      key={props.videoId}
      type="text/html"
      src={`https://www.youtube.com/embed/${props.videoId}?rel=0`}
      frameBorder="0"
      allowFullScreen
    />
    <Controls
      title={props.title}
      videoId={props.videoId}
      onClickAddVideo={props.onClickAddVideo}
      // onClickAddVideo={props.onClickAddVideo.bind(this, props.title)}
      // onClickAddVideo={() => props.onClickAddVideo(props.title)}
    />
  </div>
);

export default Video;
