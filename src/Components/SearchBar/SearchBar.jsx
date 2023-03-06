import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './SearchBar.css';
import Ingredient from '../Ingredient/Ingredient';

const SearchBar = ({ingredients, setIngredients}) => {
    const [searchValue, setSearchValue] = useState('');

    const addIngredient = (e) => {
      e.preventDefault();
      setIngredients([...ingredients, e.target[0].value]);
      setSearchValue('');
    }

    const removeIngredient = (e) => {
        e.preventDefault();
        setIngredients(ingredients.filter(ingredient => {
            return ingredient !== e.target.textContent;
        }));
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }

    return (
    <>
        <h1>Searching for Recipes!</h1>
        <div className="search-bar-container">
            <div className="search-bar">
                <HiOutlineSearch />
                {ingredients.map((ingredient, index) => (
                    <Ingredient key={index}
                                ingredient={ingredient}
                                removeIngredient={removeIngredient}/>
                ))}
                <form onSubmit={addIngredient}>
                    <input value={searchValue} onChange={handleSearch} placeholder="Enter an ingredient . . ."></input>
                    {/* <button type='submit'>Add Ingredient</button> */}
                </form>
            </div>
            <div className="predictive-text">
                <p>predictive text goes here!</p>
            </div>
        </div>s
    </>

    )
}

export default SearchBar;