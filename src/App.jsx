// src/App.js
import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './services/firebase';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/loginPage';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar/dist/cjs/Calendar.js';
import EventForm from './components/EventFrom';

function App() {
  const [user] = useAuthState(auth);
  const [value, onChange] = useState(new Date());
  const [openEvent,setOpenEvent]=useState(false);
  useEffect(()=>{
    console.log(value)
  },[value])

  const handleDay=()=>{
    setOpenEvent(!openEvent);
  }

  return (
    <Router>
    <Calendar onChange={onChange} value={value} onClickDay={handleDay}/>
    {
      openEvent&&(
        <div>
          <EventForm/>
        </div>
      )
    }
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/calendar" element={user ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}


export default App;
