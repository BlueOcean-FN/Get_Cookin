import React, { useState, useEffect } from 'react';
import './SavedPage.css';
import axios from "axios";
import ItemList from "../../Components/ItemList/ItemList.jsx";
import { HiOutlineSearch } from 'react-icons/hi';

const SavedPage = ({ user_id, setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(true);
  }, [])

  const [saveList, setSaveList] = useState([{name: 'Unethical Chicken', ingredients: 'One human child, 10 gal chicken broth, bushel carrots, bushel potatoes', url: 'http://www.zaxbys.com'}, {name: 'Chicken Cordon Bleu 2', ingredients: 'One blue chicken, 1 lb mozzarella cheese, bread crumbs, parsley', url: 'http://www.kfc.com'}]);
  const [displayList, setDisplayList] = useState(saveList);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSearch = (e) => {
    // const regex = new RegExp(`${searchValue}`, 'g');
    e.preventDefault();
    setDisplayList(saveList.filter(item => {
      let searchName = item.name.toLowerCase();
      let searchIngredients = item.ingredients.toLowerCase();
      let searchLower = searchValue.toLowerCase();
      return searchName.includes(searchLower) ||
      searchIngredients.includes(searchLower);
    }))
  }

  useEffect(() => {
    //get db entries for users saved recipes
    //should return an array of objects with {name: recipe name, ingredients: stringoffouringredients}
    // axios.get('/saved', {
    //   params: {
    //     user_id: user_id,
    //     type: 'saved'
    //   }
    // })
    // .then(function (response) {
    //   setSaveList(response);
    // })
    // .catch(function (error) {
    //   console.log('Axios error in SavedPage useEffect', error);
    // })

  }, []);

  const renderSaveList = function() {
    if (saveList.length === 0) {
      return 'No Saved Items.'
    } else {
      return <ItemList title={'Saved Recipes'} data={displayList}/>
      }
    }

  return (
    <>
    <div className="saveListContainer">
      <div className="saveListSearchBar">
        <form onSubmit={handleSearch}>
          <HiOutlineSearch />
          <input placeholder="Search your saved recipes!"
                 value={searchValue}
                 onChange={handleChange}/>
        </form>
      </div>
      <div className="renderSaveList">
        {renderSaveList()}
      </div>
    </div>
    </>
  )
}

export default SavedPage;