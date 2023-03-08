import React, { useState, useEffect } from "react";
import './MoreDietRes.css';
import IndivDietRes from './IndivDietRes.jsx';
import { ImCross } from 'react-icons/im';
import axios from 'axios';

const MoreDietaryRes = () => {
  const [moreRestriction, setMoreRestriction] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState('');

const edamamApi = (userInput) => {
      axios.get(`http://localhost:3000/autoComplete?q=${userInput}`)
      .then (res => {
        console.log('InsideuseEffect', res)
        setSuggestions(res.data)
      });
}

  const addRestrictions = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, e.target[0].value]);
    setMoreRestriction('');
  }

  const removeRestrictions = (e) => {
    setIngredients(ingredients.filter(ingredient => {
      return ingredient !== e.target.textContent;
    }))
  }

  const suggestHandler = (text) =>{
    setMoreRestriction(text);
    setSuggestions([]);
    setIngredients([...ingredients, text]);
    setMoreRestriction('');
  }

  return (
    <div className='moreDietRes'>
      <ImCross/>
      {ingredients.map((ingredient, index) => (
        <IndivDietRes key={index} ingredient={ingredient} removeRestrictions={removeRestrictions}/>
      ))}
      <form onSubmit={addRestrictions}>
        <input className='inputContainer' id='auto' onfocus='pokemon' placeholder='add more restrictions'  value={moreRestriction} onChange={(e) => {
          setMoreRestriction(e.target.value)
          edamamApi(e.target.value)
        }}/>
      {suggestions && suggestions.map((suggestion, index) =>
      <div onClick={() => suggestHandler(suggestion)}className='suggestion'> {suggestion}</div>
      )}
      </form>
    </div>
  );
}

export default MoreDietaryRes;
