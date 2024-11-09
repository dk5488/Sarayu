
import React, { useState, useEffect } from 'react';
import axios from '../api';

const EventForm = ({ event, onSave }) => {
  const [title, setTitle] = useState(event ? event.title : '');
  const [description, setDescription] = useState(event ? event.description : '');
  const [dateTime, setDateTime] = useState(event ? event.dateTime : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = { title, description, dateTime };
    if (event) {
      await axios.put(`/events/${event._id}`, eventData);
    } else {
      await axios.post('/events', eventData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="time" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
      <button type="submit">{event ? 'Update' : 'Create'} Event</button>
    </form>
  );
};

export default EventForm;
