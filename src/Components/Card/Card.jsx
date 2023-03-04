import React, { useState, useEffect } from "react";
import './Card.css';

const Card = ({ data }) => {

  const [card, setCard] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (data) {
      setCard(data);
    }
  }, [data])

  return (
    <div className="Card">
      {card && 'This is the Card.'}
    </div>
  )

}

export default Card;