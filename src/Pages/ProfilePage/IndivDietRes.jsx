import React, { useState } from 'react';
import './IndivDietRes.css';

const IndivDietRes = ({ingredient, removeRestriction}) => {
  return (
    <span className='indivRes' onClick={removeRestriction}>{ingredient}</span>
  )
}

export default IndivDietRes;