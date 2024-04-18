import React from 'react';

const Hosted = ({ eventName, eventDate, venue, participantLimit, detailedDescription }) => {
    console.log(eventName, eventDate, venue, participantLimit, detailedDescription);
  return (
    <div>
      <div className='hosted'>
        <h1>Hosted Event Details</h1>
        <div className='hosted-details'>
          <p><strong>Event Name:</strong> {eventName}</p>
          <p><strong>Event Date:</strong> {eventDate}</p>
          <p><strong>Venue:</strong> {venue}</p>
          <p><strong>Participant Limit:</strong> {participantLimit}</p>
          <p><strong>Detailed Description:</strong> {detailedDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Hosted;