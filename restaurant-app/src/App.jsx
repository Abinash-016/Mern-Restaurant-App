import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Offers from './pages/Offers';
import Reviews from './pages/Reviews';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Location from './pages/Location';
import OrderHistory from './pages/OrderHistory';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/location" element={<Location />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
