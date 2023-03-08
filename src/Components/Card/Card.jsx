import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import './Card.css';

const Card = ({ data }) => {  
  console.log(data)

  const [cardImage, setCardImage] = useState(null);
  const [expanded, setExpanded] = useState(false);
 
  const displayItem = (prop) => {
    let arr = [];
    if (!expanded || prop !== 'ingredients') for (let i = 0; i < 7 && i < data[prop].length; i++) arr.push(data[prop][i]);
    else for (let i = 0; i < 8 && i < data[prop].length; i++) arr.push(data[prop][i]);
    if (arr.length < data[prop].length) arr.push('...');
    return arr;
  }

  console.log(data.cautions)



  const unExpandedCard =
    <div className="Card">
      <div className='recipe-name'>
        <h2 className="recipe-name-text">{data.label}</h2>
      </div>
      <div className='middle-bar'>
        <ul className='ingredients'>
          {displayItem('ingredients').map(txt => <li>{txt}</li>)}
        </ul>
        <div className='image-container compressed'>
          <img src={data.image} onerror={"https://gfi.org/wp-content/uploads/2023/01/COR22054_webinar-graphics-business-of-alt-protein-January_header-feature.png"}alt={'null'} />
        </div>
      </div>
      <div className="ExpansionBlock">
      <FaAngleDown className="compress" size={30} onClick={() => { setExpanded(true) }} />
      </div>
    </div>


  const expandedCard =
    <div className="ExpandedCard">
      <div className='recipe-name'>
        <h2 className="recipe-name-text">{data.label}</h2>
      </div>
      <div className='middle-bar'>
        <ul className='ingredients'>
          {displayItem('ingredients').map(txt => <li>{txt}</li>)}
        </ul>
        <div className='image-container compressed'>
          <img src={data.image} alt={"https://gfi.org/wp-content/uploads/2023/01/COR22054_webinar-graphics-business-of-alt-protein-January_header-feature.png"} />
        </div>
      </div>
      <div className='extra-data'>
        <ul className='vital-data middle'>
          {[`serves 3 Humans`, `${parseInt(data.calories/3)} kcal/s`, `takes ${data.totalTime} min`].map(txt => <li>{txt}</li>)}
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
      <div className="ExpansionBlock">
      <FaAngleUp className="compress" size={30} onClick={() => { setExpanded(false) }} />
      <button className="show-recipe"onClick={() => window.open(data.url, '_blank', 'noopener,noreferrer')} >Show Recipe</button>
      
      
      </div>
    </div>




  if (data) {
    return (
      <>
        {expanded
          ? expandedCard
          : unExpandedCard
        }
      </>
    )
  } else {
    return (
      <>No Recipes Found</>
    )
  }
}
export default Card;