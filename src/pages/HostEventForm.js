import React from 'react'
import Navbar from '../components/Navbar'
import './HostEventForm.css'
import { useState } from 'react';
import Hosted from '../Events/Hosted';

export default function Host() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [venue, setVenue] = useState('');
  const [participantLimit, setParticipantLimit] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [detailedDescription, setDetailedDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isHosted, setIsHosted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && eventDate && venue && participantLimit && detailedDescription) {
      // Clear any previous messages
      setSuccessMessage('');
      setErrorMessage('');
      // Display success message
      setSuccessMessage('Event successfully hosted!');
      // Clear form fields
      setEventName('');
      setEventDate('');
      setVenue('');
      setParticipantLimit('');
      setShortDescription('');
      setDetailedDescription('');
      setIsHosted(true);
    } else {
      setErrorMessage('Please fill in all the fields');
    }
  };

 return (
   <div>
    <Navbar/>
    {/* {!isHosted ? ( */}
    <div className='host'>
     <div className='hostcontainer'>
         <form className='hostdetails' onSubmit={handleSubmit}>
           <h1>Host Details</h1>
           <input type='text' placeholder='Your Name'/>
           <input type='email' placeholder='Your Email'/>
           <input type='phone' placeholder='Your Phone'/>
           <input type='location' placeholder='From'/>
         </form>  
      
      <form  onSubmit={handleSubmit} className='eventdetails'>
        <h1>Event Details</h1>
      <select id="dropdown">
        <option value="" disabled selected hidden>Event Tittle</option>
        <option value="option1">Business</option>
        <option value="option2">Concert</option>
        <option value="option3">Sport</option>
        <option value="option3">Conference</option>
        <option value="option3">Festival</option>
        <option value="option3">Food $ Drink</option>
      </select>
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder='Event name'/>
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
          <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} placeholder='Venue'/>
          <input type="number" value={participantLimit} onChange={(e) => setParticipantLimit(e.target.value)} placeholder='Participant limit'/>
          <textarea value={detailedDescription} onChange={(e) => setDetailedDescription(e.target.value)}  placeholder='Description'/>
        <button type="submit">Host</button>

       </form>
       {successMessage && <div className="success-message">{successMessage}</div>}
       {errorMessage && <div className="error-message">{errorMessage}</div>}
       </div>
       </div> 
    </div>
  )
}
