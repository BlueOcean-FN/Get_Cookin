import React, { useState, useEffect } from "react";
import axios from 'axios';

import './Card.css';

const Card = ({ data }) => {

  const [card, setCard] = useState(null);
  const [cardImage, setCardImage] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const displayItem = (prop) => {
    let arr = [];
    if (!expanded  || prop !== 'ingredients') for (let i = 0; i < 3 && i < card[prop].length; i++) arr.push(card[prop][i]);
    else for (let i = 0; i < 4 && i < card[prop].length; i++) arr.push(card[prop][i]);
    if (arr.length < card[prop].length) arr.push('...');
    return arr;
  }

  const displayVital = () => {
    return [`serves ${card.serveSize}`, `${card.calories/card.serveSize} kcal/s`, `takes ${card.totalTime} min`];
  }

  const expand = () => {
    setExpanded(true);
  }

  const compress = () => {
    setExpanded(false);
  }

  useEffect(() => {
    if (data) {
      setCard(data);
    }
  }, [data])

  return (
    <div className="Card">
      {card &&
      <>
      <div className='recipe-name'>
        <h2>{card.label}</h2>
      </div>
      <div className='middle-bar'>
        <ul className='ingredients'>
          {displayItem('ingredients').map(txt => <li>{txt}</li>)}
        </ul>
        {!expanded &&
        <ul className='vital-data middle'>
          {[`serves ${card.serveSize}`, `${parseInt(card.calories/card.serveSize)} kcal/s`, `takes ${card.totalTime} min`].map(txt => <li>{txt}</li>)}
        </ul>
        }
        <div className='image-container compressed'>
        {/* somehow swap compressed^ for expanded^ when expanded is ttue and vice-versa */}
          <img src={card.image} alt={card.label} />
        </div>
      </div>
      {expanded &&
      <div className='extra-data'>
        <ul className='vital-data middle'>
          {[`serves ${card.serveSize}`, `${parseInt(card.calories/card.serveSize)} kcal/s`, `takes ${card.totalTime} min`].map(txt => <li>{txt}</li>)}
        </ul>
        <ul className='caution-data'>
          {displayItem('cautions').map(txt => <li>{txt}</li>)}
        </ul>
        <ul className='diet-data'>
          {displayItem('dietLabels').map(txt => <li>{txt}</li>)}
        </ul>
        <ul className='health-data'>
          {displayItem('healthLabels').map(txt => <li>{txt}</li>)}
        </ul>
      </div>
      }
      <div className='card-interactions'>
        {expanded ?
        <>
          <button className="compress" onClick={compress}>compress</button>
          <button className="show-recipe" onClick={() => window.location.href = card.url} >show recipe</button>
        </> : <>
        <button className="dropdown" onClick={expand}>dropdown</button>
        </>}
      </div>
      </>
      }
    </div>
  )

}

export default Card;