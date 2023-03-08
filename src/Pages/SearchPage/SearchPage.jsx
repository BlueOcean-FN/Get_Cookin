import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import Filters from '../../Components/Filters/Filters.jsx';
import CardList from '../../Components/CardList/CardList.jsx';

const SearchPage = ({ setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(true);
  }, [])

  const [filters, setFilters] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  return (
    <div className='SearchPage'>
      <SearchBar setIngredients={setIngredients}
                 ingredients={ingredients}/>
      <Filters setFilters={setFilters}
               filters={filters}/>
      <CardList />
    </div>
  )
};

export default SearchPage;