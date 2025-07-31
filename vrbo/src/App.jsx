import React, { useState, useCallback } from 'react';
import BookingConfirmation from './components/BookingConfirmation';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
const PropertyList = React.lazy(() => import('./components/PropertyList'));
import PopularDestinations from './components/PopularDestinations';
import WeekendGetawaysCarousel from './components/WeekendGetawaysCarousel';
import Footer from './components/Footer';
import PropertyStyleGallery from './components/PropertyStyleGallery';
import PromotionalCards from './components/PromotionalCards';

const examplePropertyTypes = [
  {
    id: 'house',
    name: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'condo-apartment',
    name: 'Condo/Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 'cabin',
    name: 'Cabin',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'cottage',
    name: 'Cottage',
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'villa',
    name: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

const examplePromotionalCards = [
  {
    id: 'card1',
    title: 'Last minute deals on thousands of stays',
    imageUrl: '/pictures/1311905-0_2-2x.jpg',
    link: '#',
  },
  {
    id: 'card2',
    title: 'Ways to save this summer',
    imageUrl: '/pictures/1311909-0_2-2x.jpg',
    link: '#',
  },
  {
    id: 'card3',
    title: 'You can fit a lot of vacation into a weekend',
    imageUrl: '/pictures/1311901.jpg',
    link: '#',
  },
];

function App() {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2); // Default to 2 guests
  const [bookingDetails, setBookingDetails] = useState(null);
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);

  const handleBookingSuccess = useCallback((details) => {
    setBookingDetails(details);
    setShowBookingConfirmation(true);
  }, []);

  const handleGoHome = useCallback(() => {
    setBookingDetails(null);
    setShowBookingConfirmation(false);
  }, []);

  return (
    <div className="App">
      <Header />
      {showBookingConfirmation ? (
        <BookingConfirmation bookingDetails={bookingDetails} onGoHome={handleGoHome} />
      ) : (
        <>
          <Search
            location={location}
            setLocation={setLocation}
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
            guests={guests}
            setGuests={setGuests}
          />
          <PromotionalCards cards={examplePromotionalCards} />
          <PopularDestinations />
          <WeekendGetawaysCarousel />
          <PropertyStyleGallery propertyTypes={examplePropertyTypes} />
          <React.Suspense fallback={<div>Loading Property List...</div>}>
            <PropertyList
              location={location}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              guests={guests}
              onBookingSuccess={handleBookingSuccess}
            />
          </React.Suspense>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;