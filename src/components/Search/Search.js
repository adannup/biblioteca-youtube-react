import React from 'react';
import './Search.css';

const Search = props => <input className="search-input" type="text" placeholder="Buscar" onChange={props.onChange} />;

export default Search;
