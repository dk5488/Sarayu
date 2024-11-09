import React, { useEffect, useState } from 'react';
import axios from '../api';
import EventForm from '../components/EventFrom';

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const fetchEvents = async () => {
    const response = await axios.get('/events');
    setEvents(response.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/events/${id}`);
    fetchEvents();
  };

  return (
    <div>
      <h2>Your Events</h2>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{new Date(event.dateTime).toLocaleString()}</p>
          <p>{event.description}</p>
          <button onClick={() => setSelectedEvent(event)}>Edit</button>
          <button onClick={() => handleDelete(event._id)}>Delete</button>
        </div>
      ))}
      <EventForm event={selectedEvent} onSave={fetchEvents} />
    </div>
  );
};

export default CalendarView;
