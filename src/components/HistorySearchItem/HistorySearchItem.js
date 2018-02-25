import React from 'react';
import PropTypes from 'prop-types';
import './HistorySearchItem.css';

const HistorySearchItem = ({ query }) => <span className="favorite-history__item">{query}</span>;

HistorySearchItem.propTypes = {
  query: PropTypes.string.isRequired,
};

export default HistorySearchItem;
