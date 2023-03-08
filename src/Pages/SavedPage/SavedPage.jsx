import React, { useState, useEffect } from 'react';
import './SavedPage.css';
import axios from "axios";
import ItemList from "../../Components/ItemList/ItemList.jsx";


const SavedPage = ({ email, setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(true);
  }, [])

  const [saveList, setSaveList] = useState([]);

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
    })
    .catch(function (error) {
      console.log('Axios error in SavedPage useEffect', error);
    })

  }, []);

  const renderSaveList = function() {
    if (saveList.length === 0) {
      return 'No Saved Items.'
    } else {
      return <ItemList title={'Saved Recipes'} data={saveList}/>
      }
    }

  return (
    <>
    <div className="saveListContainer">
      <div className="saveListSearchBar">
        Search Bar Here - Stretch Goal
      </div>
      <div className="renderSaveList">
        {renderSaveList()}
      </div>
    </div>
    </>
  )
}

export default SavedPage;