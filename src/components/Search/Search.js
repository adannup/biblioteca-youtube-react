import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = props => <input className="search-input" type="text" placeholder="Buscar" onChange={props.onChange} />;

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
