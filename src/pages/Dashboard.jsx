// src/pages/Dashboard.js
import React from 'react';
import CalendarView from '../components/CalenderView';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <CalendarView />
    </div>
  );
};

export default Dashboard;
