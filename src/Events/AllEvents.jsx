import React from 'react'
import { useState , useEffect} from 'react';

import EventDetails from '../components/EventDetails';

export default function AllEvents() {
  const [events, setEvents]= useState(null)
  useEffect(()=>{
    const fetchEvents= async()=>{
      const response= await fetch('/api/events')
      const json= await response.json()

      if(response.ok){
        setEvents(json)
      }
    }
    fetchEvents()
  },[])

  return(
    <div className='home'>
      <div className='events'>
        {events && events.map((event)=>(
          <EventDetails key={event._id} event={event}/>
        ))}
      </div>
    </div>
  )
}
