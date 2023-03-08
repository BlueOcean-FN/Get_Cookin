import React, { useState, useEffect } from "react";
import './RecentlyViewed.css';

let tempList = ['Blackened Chicken', 'Key Lime Pie', 'Lemon Cake', 'Cordon Bleu Chicken'];

const RecentlyViewed = () => {
  const viewedListHTML = tempList.map((item) => {
    return (
      <div>{item}</div>
    )
  });
  if (viewedListHTML.length === 0) {
    return (
      <div>You have not viewd any recipes yet.</div>
    )
  }
  return (
    <div className='recentlyViewed'>
      <h3>Recently Viewed</h3>
      {viewedListHTML}
    </div>
  )
}
export default RecentlyViewed;


