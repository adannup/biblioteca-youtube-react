import React from 'react';
import FavoriteHistoryItem from './FavoriteHistoryItem';

const FavoriteHistoryList = props => {
  const historyList = props.history.map((item, index) => (
    <FavoriteHistoryItem
      key={index}
      query={item}
    />
  ));

  return (
    <div className="favorite-history">
      {historyList}
    </div>
  );
};

export default FavoriteHistoryList;
