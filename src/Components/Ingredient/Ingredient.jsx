import React from 'react';
import './Ingredient.css';

const Ingredient = ({ingredient, removeIngredient}) => {
  return (
    <span className="ingredient" onClick={removeIngredient}>{ingredient}</span>
  )
}

export default Ingredient;