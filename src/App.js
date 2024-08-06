// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/page';
import SearchPage from './pages/searchPage/page';
import ProfilePage from './pages/profilePage/page';
import BottomNav from './components/bottomNav/page';
import LoginPage from './pages/login/loginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;