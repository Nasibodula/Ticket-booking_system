import React from 'react'
import {Link} from 'react-router-dom'
import './Eventcards.css'
import { FaMapMarkerAlt, FaClock  } from 'react-icons/fa';
import foodmood from '../assets/images/food-mood.jpg'
import autoseat from '../assets/images/auto-seat.jpg'
import recurrent from '../assets/images/recurrent.jpg'


const EventCards = ({ image,description,time, location, cost}) => {
  return (
    <div className='eventcards'>
    <div className="eventcard">
    <div className='imagecontainer'>
    <img src={image} alt="eventCard" />
    </div>
    <div className="eventcard-body">
      <h3>{description}</h3>
      <p><FaClock /> {time}</p>
      <p><FaMapMarkerAlt/> {location}</p>
      <Link to='/events/book'><button>Get Ticket</button></Link>
      <p>{cost}</p>
    </div>
  </div>  
  </div>   

  )
}

const EventCardList = () => {
    const cards = [
    {
        id: 1,
        image: foodmood,
        description:"The food mood Reboot",
        time:"Sun, February 25, 2024, 2:30",
        location:"Eldoret, Kenya",
        cost: "$10.00 - $25.00"

    },
    {
        id: 2,
        image: autoseat,
        description:"Auto Seat",
        time:"Sun, February 25, 2024, 2:30",
        location:"Nairobi, Kenya",
        cost: "$10.00 - $25.00"

    },
    {
        id: 3,
        image: recurrent,
        description:"Recurrent event",
        time:"Sun, February 25, 2024, 2:30",
        location:"Moyale, Kenya",
        cost: "$10.00 - $25.00"

    },
]
return (
    <div>
        <h1>Upcoming Events</h1>
    <div className="eventcard-list">
      {cards.map((card, index) => (
        <EventCards key={index} {...card} />
      ))}
    </div>
    </div>
  );
};
export default EventCardList;