import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import Filters from '../../Components/Filters/Filters.jsx';
import CardList from '../../Components/CardList/CardList.jsx';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const SearchPage = ({ setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(true);
  }, [])

  const [filters, setFilters] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [cards, setCards] = useState([]);

  const searchRecipes = (e) => {
    const token = localStorage.getItem('token');
    const decode = jwtDecode(token);
    e.preventDefault();
    axios.get('http://localhost:3000/searchrecipes', {
      headers: {
        authorization: localStorage.getItem('token')
      },
      params: {
        excluded: filters,
        q: ingredients,
        user_id: decode.id
      }
    })
    .then(results => {
      console.log(results);
      setCards(results.data);
    })
  }


  const randomSearchTerm = () => {
    const searchTerms = ['chicken', 'beef', 'vodka', 'pickle', 'shark', 'cous cous', 'sandwich roll', 'salad mix', 'pork'];
    const randomIndex = Math.floor(Math.random() * searchTerms.length);
    return searchTerms[randomIndex];
  }


  useEffect(() => {
    axios.get('http://localhost:3000/searchrecipes', {
      headers: {
        authorization: localStorage.getItem('token')
      },
      params: {
        excluded: filters,
        q: [randomSearchTerm()]
      }
    })
    .then(results => {
      console.log(results);
      setCards(results.data);
    })
  }, [])


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