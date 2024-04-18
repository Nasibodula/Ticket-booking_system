import React from 'react'
import Lottie from 'lottie-react'
import landinganimation from '../animation2.json'
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Landingpage.css'
import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <div className='landing'>
        <div className='landingheader'>
            <h1>Event Booking</h1>
            <div className='link'>
              <Link to='/Signup'><button><a href='#'><FaSignInAlt/>Sign up</a></button></Link> 
              <Link to='/Login'><button><a href='#'><FaUserPlus/>Login</a></button></Link>
            </div>
        </div>
      <div className='animation'>
        <Lottie animationData={landinganimation}/>
      </div>
    </div>
  )
}
