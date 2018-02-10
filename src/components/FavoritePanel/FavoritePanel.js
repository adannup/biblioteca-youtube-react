import React from 'react';
import FavoriteList from './FavoriteList';
import FavoriteHistoryList from './FavoriteHistoryList';
import './FavoritePanel.css';

const FavoritePanel = props => (
  <div className="favorite-panel">
    <div className="favorite-container">
      <h3 className="favorite__title">Biblioteca</h3>
      <FavoriteList favorites={props.favorites} />
      <FavoriteHistoryList history={props.history} />
    </div>
  </div>
);


export default FavoritePanel;
