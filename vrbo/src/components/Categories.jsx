import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="category-item">
        <img src="/icons/house.svg" alt="Houses" />
        <span>Houses</span>
      </div>
      <div className="category-item">
        <img src="/icons/cabin.svg" alt="Cabins" />
        <span>Cabins</span>
      </div>
      <div className="category-item">
        <img src="/icons/condo.svg" alt="Condos" />
        <span>Condos</span>
      </div>
      <div className="category-item">
        <img src="/icons/apartment.svg" alt="Apartments" />
        <span>Apartments</span>
      </div>
    </div>
  );
};

export default Categories;
