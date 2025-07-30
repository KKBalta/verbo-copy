import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import PropertyList from './components/PropertyList';
import PopularDestinations from './components/PopularDestinations';
import WeekendGetawaysCarousel from './components/WeekendGetawaysCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Categories />
      <PopularDestinations />
      <WeekendGetawaysCarousel />
      <PropertyList />
      <Footer />
    </div>
  );
}

export default App;