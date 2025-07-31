import React, { useState, useEffect } from 'react';
import './Search.css';

const Search = ({ location, setLocation, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, guests, setGuests }) => {
  const [dateError, setDateError] = useState('');

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const inDate = new Date(checkInDate);
      const outDate = new Date(checkOutDate);
      if (inDate >= outDate) {
        setDateError('Check-out date must be after check-in date.');
      } else {
        setDateError('');
      }
    } else {
      setDateError('');
    }
  }, [checkInDate, checkOutDate]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (dateError) {
      return;
    }
    // Proceed with search logic (e.g., trigger property list update)
  };
  return (
    <div className="search-container">
      <h1 className="search-title">Find your place to get away</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-input">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="e.g. beach, city, cabin"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="search-input">
          <label htmlFor="check-in">Check-in</label>
          <input
            type="date"
            id="check-in"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div className="search-input">
          <label htmlFor="check-out">Check-out</label>
          <input
            type="date"
            id="check-out"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
        <div className="search-input">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            id="guests"
            placeholder="2"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <button type="button" className="search-button" onClick={handleSearch}>Search</button>
      </form>
      {dateError && <p className="date-error-message">{dateError}</p>}
    </div>
  );
};

export default Search;
