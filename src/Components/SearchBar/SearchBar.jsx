import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './SearchBar.css';
import Ingredient from '../Ingredient/Ingredient';
import PredictiveIngredient from '../PredictiveIngredient/PredictiveIngredient';
import axios from 'axios';



const SearchBar = ({ingredients, setIngredients}) => {

    const [searchValue, setSearchValue] = useState('');
    const [autocomplete, setAutocomplete] = useState([]);
    const [timer, setTimer] = useState(null);



    const addIngredient = (e) => {
      e.preventDefault();
      setIngredients([...ingredients, e.target[0].value]);
      setSearchValue('');
    }

    const removeIngredient = (e) => {
        setIngredients(ingredients.filter(ingredient => {
            return ingredient !== e.target.textContent;
        }));
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const predictiveClick = (e) => {
      setIngredients([...ingredients, e.target.textContent])
      setSearchValue('');
      setAutocomplete([]);
    }

    useEffect(() => {
      clearTimeout(timer);
      setTimer(setTimeout( async () => {
        const words = await axios.get('http://localhost:3000/ingredientdata', {
          params: {
            search: searchValue
          }
        })
        setAutocomplete(words.data);
      }, 300))
    }, [searchValue])

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
                    <input id="autoComplete"
                           value={searchValue}
                           onChange={handleSearch}
                           autoFocus="autofocus"
                           autoComplete="off"></input>
                </form>
            </div>
            <div className="predictive-text">
                {autocomplete.map((item, index) => (
                  <PredictiveIngredient ingredient={item}
                                        handleClick={predictiveClick}
                                        key={index}/>
                ))}
            </div>
        </div>
    </>

    )
}

export default SearchBar;