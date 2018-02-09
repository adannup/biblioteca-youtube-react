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
      src={`http://www.youtube.com/embed/${props.videoId}?autoplay=0`}
      frameBorder="0"
    />
    <Controls />
  </div>
);

export default Video;
