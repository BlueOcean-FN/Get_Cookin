import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './SearchBar.css';
import Ingredient from '../Ingredient/Ingredient';
import PredictiveIngredient from '../PredictiveIngredient/PredictiveIngredient';
import axios from 'axios';



const SearchBar = ({ingredients, setIngredients, searchRecipes}) => {

    const [searchValue, setSearchValue] = useState('');
    const [autocomplete, setAutocomplete] = useState([]);
    const [timer, setTimer] = useState(null);

    const addIngredient = (e) => {
      e.preventDefault();
      if (autocomplete.indexOf(e.target[0].value) !== -1) {
        setIngredients([...ingredients, e.target[0].value]);
        setSearchValue('');
      }
    }

    const removeIngredient = (e) => {
        setIngredients(ingredients.filter(ingredient => {
            return `${ingredient} \u2716` !== e.target.textContent;
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
      if (searchValue !== "") {
        clearTimeout(timer);
        setTimer(setTimeout( async () => {
          const words = await axios.get('http://localhost:3000/ingredientdata', {
            headers: {
              authorization: localStorage.getItem('token')
            },
            params: {
              search: searchValue
            }
          })
          setAutocomplete(words.data);
        }, 300))
      }
    }, [searchValue])

    return (
    <>
        <h1>Searching for Recipes!</h1>
        <div className="search-bar-container">
            <div className="search-bar">
                <HiOutlineSearch />
                <form onSubmit={searchRecipes}>
                  <button>Search</button>
                </form>
                {ingredients.map((ingredient, index) => (
                    <Ingredient key={index}
                                ingredient={`${ingredient} \u2716`}
                                removeIngredient={removeIngredient}/>
                ))}
                <form onSubmit={addIngredient} className="search-form">
                    <input id="autoComplete"
                           className="searchinput"
                           value={searchValue}
                           onChange={handleSearch}
                           placeholder="enter ingredients"
                           autoFocus="autofocus"
                           autoComplete="off"></input>
                </form>
            </div>
            {autocomplete.length > 0 && searchValue !== "" && <div className="predictive-text"><div className="suggestions">Suggestions</div>
                {autocomplete.map((item, index) => (
                  <PredictiveIngredient ingredient={item}
                                        handleClick={predictiveClick}
                                        key={index}/>
                ))}
            </div>}
        </div>
    </>

    )
}

export default SearchBar;
