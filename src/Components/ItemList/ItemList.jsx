import {React, useState, useEffect} from 'react';
import './ItemList.css';




const ItemList = ({title, data}) => {


  const renderItemList = data.map((entry, index) => {
    return (
      <li key={entry.name + `${index}`} className="listItem">
      <a  target="_blank">{entry.name}</a><br/>
    </li>
    )
  })

  return (
    <div className="itemListContainer">
      <div className="itemListTitle">
        <hr/>
      </div>
      <div className="itemList">
        <ul>
          {renderItemList}
        </ul>
      </div>
    </div>
  )
}

export default ItemList;