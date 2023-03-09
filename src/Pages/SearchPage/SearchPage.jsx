import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import Filters from '../../Components/Filters/Filters.jsx';
import CardList from '../../Components/CardList/CardList.jsx';
import axios from 'axios';

const SearchPage = ({ setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(true);
  }, [])

  const [filters, setFilters] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [cards, setCards] = useState([]);

  const searchRecipes = (e) => {
    e.preventDefault();
    axios.get('http://localhost:3000/searchrecipes', {
      headers: {
        authorization: localStorage.getItem('token')
      },
      params: {
        excluded: filters,
        q: ingredients
      }
    })
    .then(results => {
      console.log(results);
    })
  }

  return (
    <div className='SearchPage'>
      <SearchBar setIngredients={setIngredients}
                 ingredients={ingredients}
                 searchRecipes={searchRecipes}/>
      <Filters setFilters={setFilters}
               filters={filters}/>
      <CardList cards={cards}/>
    </div>
  )
};

export default SearchPage;