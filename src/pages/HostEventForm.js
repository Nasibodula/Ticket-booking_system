import {useState} from 'react';
import './HostEventForm.css';

const HostEventForm = () =>{
  const [eventtitle, setEventtitle] = useState('');
  const [eventname, setEventname] = useState('');
  const [eventdate, setEventdate] = useState('');
  const [eventvenue, setEventvenue] = useState('');
  const [eventcost, setEventcost] = useState('');
  const [eventlimit, setEventlimit] = useState('');
  const [eventdescription, setEventdescription] = useState('');
  const [eventimage, setEventimage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const event = {eventtitle, eventname, eventdate, eventvenue, eventcost, eventlimit, eventdescription, eventimage}
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify(event),
      headers:{
        'Content-Type': 'Application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setEventname('');
      setEventdate('');
      setEventvenue('');
      setEventlimit('');
      setEventdescription('');
      console.log('new event added:', json)
    }

  }


 return (
   <div>
    {/* {!isHosted ? ( */}
    <div className='host'>
     <div className='hostcontainer'> 
      <form  onSubmit={handleSubmit} className='eventdetails'>
        <h1>Event Details</h1>
      <select id="dropdown" value={eventtitle} onChange={(e)=> setEventtitle(e.target.value)}>
        <option value={eventtitle} onChange={(e)=> setEventtitle(e.target.value)} disabled selected hidden>Event Tittle</option>
        <option value={eventtitle} onChange={(e)=> setEventtitle(e.target.value)}>Business</option>
        <option  value={eventtitle} onChange={(e)=> setEventtitle(e.target.value)}>Concert</option>
        <option  value={eventtitle} onChange={(e)=> setEventtitle(e.target.value)}>Sport</option>
        <option  value={eventtitle} onChange={(e)=> setEventtitle(e.target.value)}>Conference</option>
        <option  value={eventtitle} onChange={(e)=> setEventtitle(e.target.value)}>Festival</option>
        <option  value={eventtitle} onChange={(e)=> setEventtitle(e.target.value)}>Food $ Drink</option>
      </select>
          <input type="text" value={eventname} onChange={(e) => setEventname(e.target.value)} placeholder='Event name' required/>
          <input type="date" value={eventdate} onChange={(e) => setEventdate(e.target.value)}  required/>
          <input type="text" value={eventvenue} onChange={(e) => setEventvenue(e.target.value)} placeholder='Venue' required/>
          <input type="number" value={eventcost} onChange={(e) => setEventcost(e.target.value)} placeholder='cost' required/>
          <input type="number" value={eventlimit} onChange={(e) => setEventlimit(e.target.value)} placeholder='Participant limit' required/>
          <textarea value={eventdescription} onChange={(e) => setEventdescription(e.target.value)}  placeholder='Description' required/>
        <button type="submit">Host</button>
        {error && <div className="error">{error}</div>}
       </form>
       </div>
       </div> 
    </div>
  )
}
export default HostEventForm