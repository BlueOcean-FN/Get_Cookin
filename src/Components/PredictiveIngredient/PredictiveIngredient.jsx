import React from 'react';
import './PredictiveIngredient.css';

const PredictiveIngredient = ({ingredient, handleClick}) => {

  return (
    <span className="predictive-word"
          onClick={handleClick}>{ingredient}</span>
  )
}

export default PredictiveIngredient;