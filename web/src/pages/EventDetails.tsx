// EventDetails.tsx
import React from 'react';

const EventDetails = () => {
  // Dummy data for the event
  const eventDetails = {
    id: '1',
    title: 'Data Science Society Intro Night',
    description: 'Interested to learn more about data and data science but not sure where to start? Join us for an intro night with a bunch of awesome speakers coming to inspire all of us. This is a great chance to network, gain insights and meet cool new people.',
    date: 'October 13th',
    time: '6:00 PM - 8:00 PM',
    venue: 'OGGB Case Room 5',
    isFree: true,
  };

  return (
    <div>
      <h1>{eventDetails.title}</h1>
      <p>{eventDetails.description}</p>
      <p>Date: {eventDetails.date}</p>
      <p>Time: {eventDetails.time}</p>
      <p>Venue: {eventDetails.venue}</p>
      <p>{eventDetails.isFree ? 'Free' : 'Paid'}</p>
    </div>
  );
};

export default EventDetails;
