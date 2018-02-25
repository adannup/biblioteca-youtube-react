import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteVideo.css';

const FavoriteVideo = ({ title }) => <button className="favorite-video">{title}</button>;

FavoriteVideo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FavoriteVideo;
