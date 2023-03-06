import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import './Filters.css';
import Filter from '../Filter/Filter';

const Filters = ({filters, setFilters}) => {
  const [newFilter, setNewFilter] = useState('');

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
      return filter !== e.target.textContent;
    }))
  }

  return (
    <div className="filters-container">
      <ImCross />
      {filters.map((filter, index) => (
        <Filter key={index}
                filter={filter}
                removeFilter={removeFilter} />
      ))}
      <form onSubmit={addFilter}>
        <input value={newFilter}
               onChange={handleTyping}
               placeholder="Add a filter..." />
      </form>
    </div>
  )
}

export default Filters;