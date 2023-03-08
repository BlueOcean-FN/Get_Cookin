import React from 'react';
import './PredictiveFilter.css';

const PredictiveFilter = ({filter, handleClick}) => {

  return (
    <span className="predictive-filter"
          onClick={handleClick}>{filter}</span>
  )
}

export default PredictiveFilter;