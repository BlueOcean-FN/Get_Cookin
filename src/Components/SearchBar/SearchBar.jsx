import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './SearchBar.css';
import Ingredient from '../Ingredient/Ingredient';
import axios from 'axios';
import autoComplete from "@tarekraafat/autocomplete.js";



const SearchBar = ({ingredients, setIngredients}) => {

    const [searchValue, setSearchValue] = useState('');
    const [autoTimer, setAutoTimer] = useState(null);
    // const [autocomplete, setAutocomplete] = useState([]);

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
      resultItem: {
          highlight: true,
      }
    });

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

    // useEffect(() => {
    //   window.clearTimeout(autoTimer);
    //   if (searchValue === '') {
    //     return;
    //   }
    //   setAutoTimer(setTimeout(() => {
    //     console.log('querying server')
    //     axios('http://localhost:3000/ingredientdata')
    //     .then(data => {
    //       setAutocomplete(data.data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    //   }, 1000))
    // },[searchValue])

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
                           autofocus="autofocus"
                           autocomplete="off"></input>
                    {/* <button type='submit'>Add Ingredient</button> */}
                </form>
            </div>
            <div className="predictive-text">
                <p>predictive text goes here!</p>
            </div>
        </div>
    </>

    )
}

export default SearchBar;