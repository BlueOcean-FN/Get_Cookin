import React, { useState, useEffect } from 'react';
import { ImCross } from 'react-icons/im';
import './Filters.css';
import Filter from '../Filter/Filter';
import axios from 'axios';
import PredictiveFilter from '../PredictiveFilter/PredictiveFilter.jsx';

const Filters = ({filters, setFilters}) => {
  const [newFilter, setNewFilter] = useState('');
  const [filterAuto, setFilterAuto] = useState([]);
  const [timer, setTimer] = useState(null);

  const handleTyping = (e) => {
    setNewFilter(e.target.value);
  }

  const addFilter = (e) => {
    e.preventDefault();
    setFilters([...filters, e.target[0].value]);
    setNewFilter('');
  }

  const removeFilter = (e) => {
    setFilters(filters.filter(filter => {
      return `${filter} \u2716` !== e.target.textContent;
    }))
  }

  const handlePredictive = (e) => {
    setFilters([...filters, e.target.textContent]);
    setNewFilter('');
    setFilterAuto([]);
  }

  useEffect(() => {
    if (newFilter !== "") {
      clearTimeout(timer);
      setTimer(setTimeout( async () => {
        const words = await axios.get('http://localhost:3000/ingredientdata', {
          headers: {
            authorization: localStorage.getItem('token')
          },
          params: {
            search: newFilter
          }
        })
        setFilterAuto(words.data);
      }, 300))
    }
  }, [newFilter])

  return (
    <div className="filters-container">
      <div className="filter-bar">
      <ImCross />
      {filters.map((filter, index) => (
        <Filter key={index}
                filter={`${filter} \u2716`}
                removeFilter={removeFilter} />
      ))}
      <form onSubmit={addFilter} className="filter-form">
        <input value={newFilter}
               onChange={handleTyping}
               placeholder="Add a filter..." />
      </form>
      </div>
      {filterAuto.length > 0 && newFilter !== "" && <div className="filters-predictive-container">
        {filterAuto.map((item, index) => (
          <PredictiveFilter handleClick={handlePredictive}
                            filter={item}
                            key={index} />
        ))}
        </div>}
    </div>
  )
}

export default Filters;