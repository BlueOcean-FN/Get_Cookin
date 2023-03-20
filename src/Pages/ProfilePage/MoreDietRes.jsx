import React, { useState, useEffect } from "react";
import './MoreDietRes.css';
import IndivDietRes from './IndivDietRes.jsx';
import { ImCross } from 'react-icons/im';
import axios from 'axios';

const MoreDietaryRes = ({ingredients, addRestriction, removeRestriction, addAutocompleteRestriction}) => {
  const [moreRestriction, setMoreRestriction] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState('');

  const edamamApi = (userInput) => {
    axios.get(`http://localhost:3000/autoComplete?q=${userInput}`, {headers: {authorization: localStorage.getItem('token')}})
    .then(res => {
      setSuggestions(res.data)
    });
  }

  const suggestHandler = (text) =>{
    setMoreRestriction(text);
    setSuggestions([]);
    addAutocompleteRestriction(text);
    setMoreRestriction('');
  }

  return (
    <div className='moreDietRes'>
      <ImCross/>
      {ingredients.map((ingredient, index) => (
        <IndivDietRes key={index} ingredient={`${ingredient} \u2716`} removeRestriction={removeRestriction}/>
      ))}
      <div className='form-container'>
      <form onSubmit={addRestriction}>
        <input className='input-container' id='auto' autoComplete="off"  placeholder='add more restrictions'  value={moreRestriction} onChange={(e) => {
          setMoreRestriction(e.target.value)
          edamamApi(e.target.value)
        }}/>
      {suggestions && suggestions.map((suggestion, index) =>
      <div onClick={() => suggestHandler(suggestion)}className='suggestion'> {suggestion}</div>
      )}
      </form>
      </div>
    </div>
  );
}

export default MoreDietaryRes;
