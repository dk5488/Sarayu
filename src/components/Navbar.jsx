
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

const Navbar = () => {
  const handleLogout = () => {
    auth.signOut();
    window.location.href = '/';
  };

  return (
    <nav>
      <Link to="/calendar">Calendar</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
