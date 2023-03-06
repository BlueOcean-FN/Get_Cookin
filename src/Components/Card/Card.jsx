import React, { useState, useEffect } from "react";
import axios from 'axios';

import './Card.css';

const Card = ({ data }) => {

  const [card, setCard] = useState(null);
  const [cardImage, setCardImage] = useState(null);
  const [expanded, setExpanded] = useState(false);

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
        <div className='ingredients'>
          {/* something goes here */}
          I am an example
        </div>
        {!expanded &&
        <div className='vital-data middle'>
          {/* something goes here */}
          I too am one
        </div>
        }
        <div className='image-container'>
          <img src={card.image} alt={card.label} />
        </div>
      </div>
      {expanded &&
      <div className='extra-data'>
        <div className='vital-data extra'>
          {/* something goes here */}
          as am I
        </div>
        <div className='caution-data'>
          {/* something goes here */}
          and me also
        </div>
        <div className='diet-data'>
          {/* something goes here */}
          and after me
        </div>
        <div className='health-data'>
          {/* something goes here */}
          and before me
        </div>
      </div>
      }
      <div className='card-interactions'>
        {expanded ? <>
          <button className="compress" onClick={() => setExpanded(false)}>compress</button>
          <button className="show-recipe" onClick={() => window.location.href = card.url} >show recipe</button>
        </> : <>
        <button className="dropdown" onClick={() => setExpanded(true)}>dropdown</button>
        </>}
      </div>
      </>
      }
    </div>
  )

}

export default Card;