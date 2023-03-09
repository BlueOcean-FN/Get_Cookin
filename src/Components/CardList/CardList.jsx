import React, { useState, useEffect } from 'react';

import './CardList.css';
import Card from '../Card/Card.jsx';
import exampleData from './exampledata'
const CardList = ({cards}) => {

  // const [cards, setCards] = useState({exampleData})

  const cardList = cards.map((data) => {
    for (let i = 0; i < data.ingredients.length; i++) {
      if (data.ingredients[i].text) {
      data.ingredients[i] = data.ingredients[i].text
      }
    }
    if (data.cautions.length === 0) {
      data.cautions.push("No Cautions")
    }
    return (
  <Card data={data} key={data.url}/>
    )
})

  /* === NOTES FOR PAUL === (and others)
  useEffect(() => {
    // RATHER THAN immediately setting state (as I am currently, for the sake of having data to work with),
    // we will wait for cardsData to be passed from the parent component, SearchPage.
    // At that point, we will setCards(props.cardsData)

    // props.cardsData should be shaped as follows:::
      // (parsing into this shape should be done server-side)

    [
      {
        label: STRING,
        image: URL_STRING,
        url: URL_STRING,
        serveSize: 4.0, // From "yield" Prop of call to API
        dietLabels: ARRAY["STRING"],
        healthLabels: ARRAY["STRING"],
        cautions: ARRAY["STRING"],
        ingredients: ARRAY["STRING"], //must be parsed from "ingredients" Prop
        calories: NUM,
        totalTime: NUM
      },
      {...},
      {...},
      ...
    ]

  }, [props.cardsData])
  */

    return (
        <div className="CardList">

          {cardList}
        </div>
    )
}

export default CardList;