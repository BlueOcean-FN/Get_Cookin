import React, {useState} from 'react';
import './SearchPage.css';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import Filter from '../../Components/Filter/Filter.jsx';
import CardList from '../../Components/CardList/CardList.jsx';

const SearchPage = () => {
  const [filters, setFilters] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  return (
    <div className='SearchPage'>
      <SearchBar setIngredients={setIngredients}
                 ingredients={ingredients}/>
      <Filter setFilters={setFilters}
              filters={filters}/>
      <CardList />
    </div>
  )
};

export default SearchPage;