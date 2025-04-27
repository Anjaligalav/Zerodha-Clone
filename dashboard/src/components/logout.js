import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assuming you have AuthContext also in dashboard app

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('isLoggedIn'); 
    setTimeout(() => {
        window.location.href = "http://localhost:3000" || "https://zerodha-frontend-1swl.onrender.com";
      }, 1000); // or wherever your login page is
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default Logout;
