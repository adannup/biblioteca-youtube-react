import React from 'react';
import PropTypes from 'prop-types';
import FavoriteVideo from '../FavoriteVideo/FavoriteVideo';

const FavoriteVideoList = props => {
  const NoFavorite = <p style={{ marginTop: 20, color: '#999', paddingLeft: 14 }}>Videos Favoritos</p>;
  const favoriteList = props.favorites.length === 0 ? NoFavorite : props.favorites.map(favorite => (
    <FavoriteVideo
      key={favorite.videoId}
      title={favorite.title}
      videoId={favorite.videoId}
    />
  ));

  return (
    <div>
      {favoriteList}
    </div>
  );
};

FavoriteVideoList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({
    videoId: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default FavoriteVideoList;
