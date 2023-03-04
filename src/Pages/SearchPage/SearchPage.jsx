import React from 'react';
import './SearchPage.css';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import Filter from '../../Components/Filter/Filter.jsx';
import CardList from '../../Components/CardList/CardList.jsx';

const SearchPage = () => {

  return (
    <div className='SearchPage'>
      This is the SearchPage.
      <SearchBar />
      <Filter />
      <CardList />
    </div>
  )
};

export default SearchPage;