import React from 'react';
import PropTypes from 'prop-types';
import FavoriteVideoList from '../FavoriteVideoList/FavoriteVideoList';
import HistoryList from '../HistorySearchList/HistorySearchList';
import './DashboardPanel.css';

const DashboardPanel = props => (
  <div className="favorite-panel">
    <div className="favorite-container">
      <h3 className="favorite__title">Biblioteca</h3>
      <FavoriteVideoList
        onHandleVideoPlayer={props.onHandleVideoPlayer}
        favorites={props.favorites}
      />
      <HistoryList history={props.history} />
    </div>
  </div>
);

DashboardPanel.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    videoId: PropTypes.string,
  })).isRequired,
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
  onHandleVideoPlayer: PropTypes.func.isRequired,
};

export default DashboardPanel;
