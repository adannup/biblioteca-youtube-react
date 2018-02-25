import React from 'react';
import PropTypes from 'prop-types';
import './AlertMessage.css';

const AlertFavoriteExist = ({ favoriteVideo }) => <div className="alert-message">El video <b>{favoriteVideo.title}</b> ya se encuentra en la lista</div>;

AlertFavoriteExist.propTypes = {
  favoriteVideo: PropTypes.shape({
    videoId: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default AlertFavoriteExist;
