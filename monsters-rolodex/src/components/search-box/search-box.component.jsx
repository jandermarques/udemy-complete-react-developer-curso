import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleSearch }) => (
  <input
    type='search'
    className='search'
    name='searchField'
    placeholder={placeholder}
    onChange={handleSearch}
  />
);
