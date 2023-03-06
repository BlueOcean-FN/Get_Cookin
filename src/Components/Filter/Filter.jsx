import React from 'react';
import './Filter.css';

const Filter = ({filter, removeFilter}) => {
  return (
    <span className="filter" onClick={removeFilter}>{filter}</span>
  )
}

export default Filter;