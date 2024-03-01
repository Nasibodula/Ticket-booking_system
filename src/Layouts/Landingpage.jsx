import React from 'react'
import Lottie from 'lottie-react'
import landinganimation from '../animation2.json'
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Landingpage.css'

export default function Landingpage() {
  return (
    <div className='landing'>
        <div className='landingheader'>
            <h1>Event Booking</h1>
            <div className='link'>
            <button><a href='#'><FaSignInAlt/>Sign up</a></button>
            <button><a href='#'><FaUserPlus/>Login</a></button>
            </div>
        </div>
      <div className='animation'>
        <Lottie animationData={landinganimation}/>
      </div>
    </div>
  )
}
