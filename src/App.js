// src/App.js
import React from 'react';
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/page';
import SearchPage from './pages/searchPage/page';
import ProfilePage from './pages/profilePage/page';
import BottomNav from './components/bottomNav/page';
import LoginPage from './pages/login/loginPage';
import { AuthProvider } from './utils/AuthContext';
import ProtectedRoute from './utils/ProtectedRoute';
import RedirectIfAuthenticated from './utils/RedirectIfAuthenticated'; // Import the redirect component

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/login"
              element={<RedirectIfAuthenticated element={<LoginPage />} />}
            />
            <Route
              path="/home"
              element={<ProtectedRoute element={<HomePage />} />}
            />
            <Route
              path="/my"
              element={<ProtectedRoute element={<SearchPage />} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute element={<ProfilePage />} />}
            />
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;