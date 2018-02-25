import React from 'react';
import PropTypes from 'prop-types';
import HistorySearchItem from '../HistorySearchItem/HistorySearchItem';

const HistorySearchList = props => {
  const historyList = props.history.map((item, index) => (
    <HistorySearchItem
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

HistorySearchList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HistorySearchList;
