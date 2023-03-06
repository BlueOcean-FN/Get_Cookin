import {React, useState, useEffect} from 'react';
import './SavedPage.css';
import axios from "axios";
import Card from "../../Components/Card/Card.jsx";
import NavBurger from "../../Components/NavBurger/NavBurger.jsx";

const SavedPage = ({user_id}) => {


  const [saveList, setSaveList] = useState({});

  useEffect(() => {
    //get db entries for users saved recipes
    // axios.get('/savedPage', {
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
      return saveList.map((entry, index) => {
        <Card
        key={'saveItem' + index}
        props={entry}
        />
      })
    }
  }

  return (
    <>
    <NavBurger/>
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