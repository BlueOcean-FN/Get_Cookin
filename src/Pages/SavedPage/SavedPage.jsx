import React, { useState, useEffect } from 'react';
import './SavedPage.css';
import axios from "axios";
import ItemList from "../../Components/ItemList/ItemList.jsx";
import { HiOutlineSearch } from 'react-icons/hi';


const SavedPage = ({ email, setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(true);
  }, [])


  const [saveList, setSaveList] = useState([]);
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

    axios.get('http://localhost:3000/savedPage', {
      headers: {authorization: localStorage.getItem('token')},
      params: {
        email: localStorage.getItem('email'),
        type: 'saved'
      }
    })
    .then(function (response) {
      setSaveList(response.data);
      setDisplayList(response.data);
    })
    .catch(function (error) {
      console.log('Axios error in SavedPage useEffect', error);
    })

  }, []);

  const renderSaveList = function() {
    if (saveList.length === 0) {
      return 'No Saved Items.'
    } else {
      return <ItemList title={'Saved Recipes'} data={displayList}/>
      }
    }


  return (

    <div className="saveListContainer">
      <div className="saveTitle">Saved Recipes!</div>
      <br/>
      <div className="saveListSearchBarContainer">
            <div className="saveListSearchBar">
              <form onSubmit={handleSearch} className="saveListForm">
                <input placeholder="Search your saved recipes!"
                      value={searchValue}
                      onChange={handleChange}
                      className="saveListInput"/>
              </form>
            </div>
      </div>
      <div className="renderSaveList">
        <br/>
        {renderSaveList()}
      </div>
    </div>

  )
}

export default SavedPage;