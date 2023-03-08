import React, { useState } from 'react';
import './IndivDietRes.css';

const IndivDietRes = ({ingredient, removeRestrictions}) => {
  return (
    <span className='indivRes' onClick={removeRestrictions}>{ingredient}</span>
  )
}

export default IndivDietRes;