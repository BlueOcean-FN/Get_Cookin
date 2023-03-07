import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './SearchBar.css';
import Ingredient from '../Ingredient/Ingredient';
import PredictiveIngredient from '../PredictiveIngredient/PredictiveIngredient';
import axios from 'axios';
import autoComplete from "@tarekraafat/autocomplete.js";



const SearchBar = ({ingredients, setIngredients}) => {

    const [searchValue, setSearchValue] = useState('');
    const [autocomplete, setAutocomplete] = useState([]);

    window.onload = () => {
      const autoCompleteJS = new autoComplete({
        placeHolder: "Search for an ingredient . . .",
        data: {
            src: async () => {
              try {
                const source = await axios('http://localhost:3000/ingredientdata');
                const data = source.data;
                return data;
              } catch (error) {
                return error;
              }
            }
        },
        wrapper: false,
        resultsList: false,
        resultItem: {
          highlight: true,
        },
        submit: true,
        debounce: 1000,
        threshold: 1,
      });
    }

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
      document.querySelector("#autoComplete").addEventListener("results", function (event) {
        // "event.detail" carries the matching results values
        setAutocomplete(event.detail.results);
    });
    }, [])



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
                  <PredictiveIngredient ingredient={item.value}
                                        handleClick={predictiveClick}
                                        key={index}/>
                ))}
            </div>
        </div>
    </>

    )
}

export default SearchBar;