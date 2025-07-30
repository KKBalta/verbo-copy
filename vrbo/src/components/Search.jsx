import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="search-container">
      <h1 className="search-title">Find your place to get away</h1>
      <form className="search-form">
        <div className="search-input">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="e.g. beach, city, cabin" />
        </div>
        <div className="search-input">
          <label htmlFor="check-in">Check-in</label>
          <input type="date" id="check-in" />
        </div>
        <div className="search-input">
          <label htmlFor="check-out">Check-out</label>
          <input type="date" id="check-out" />
        </div>
        <div className="search-input">
          <label htmlFor="guests">Guests</label>
          <input type="number" id="guests" placeholder="2" />
        </div>
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default Search;
