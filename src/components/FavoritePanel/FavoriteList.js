import React from 'react';
import FavoriteListItem from './FavoriteListItem';

const FavoriteList = props => {
  const NoFavorite = <p style={{ marginTop: 20, color: '#777'}}>Videos Favoritos</p>;
  const favoriteList = props.favorites.length === 0 ? NoFavorite : props.favorites.map(favorite => (
    <FavoriteListItem
      key={favorite.videoId}
      title={favorite.title}
    />
  ));

  return (
    <div>
      {favoriteList}
    </div>
  );
};

export default FavoriteList;
