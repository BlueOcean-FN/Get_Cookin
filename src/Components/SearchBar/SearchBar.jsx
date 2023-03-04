import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './SearchBar.css';

const SearchBar = (props) => {
    const [ingredients, setIngredients] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const addIngredient = (e) => {
      e.preventDefault();
      setIngredients([...ingredients, e.target[0].value]);
      setSearchValue('');
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className="search-bar-container">
            <div className="search-bar">
            <HiOutlineSearch />
            {ingredients.map((ingredient, index) => (
                <span className="ingredient" key={index}>{ingredient}</span>
            ))}
            <form onSubmit={addIngredient}>
                <input value={searchValue} onChange={handleSearch} placeholder="Enter an ingredient . . ."></input>
                {/* <button type='submit'>Add Ingredient</button> */}
            </form>
            </div>
        </div>

    )
}

export default SearchBar;