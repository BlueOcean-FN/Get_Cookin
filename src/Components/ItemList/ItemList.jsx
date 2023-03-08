import {React, useState, useEffect} from 'react';
import './ItemList.css';




const ItemList = ({title, data}) => {


  const renderItemList = data.map((entry, index) => {
    return (
      <li key={entry.name + `${index}`}>
      <a href={entry.url} target="_blank">{entry.name}</a><br/>
      <hr/>
    </li>
    )
  })

  return (
    <div className="itemListContainer">
      <div className="itemListTitle">
        {title} <br/>
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