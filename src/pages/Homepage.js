import React from 'react'
import Hero from '../components/Hero'
import CardList from '../components/Cards'
import EventCardList from '../components/Eventcards'
import Review from '../components/Review'
import {useLocation, useNavigate} from 'react-router-dom';

export default function Homepage() {
  const location=useLocation()
  
  return (
    <div>
      <Hero/>
      <CardList/>
      <EventCardList/>
      <Review/>
    </div>
  )
}
