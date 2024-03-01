import React from 'react'
import './Hero.css'
import image1 from '../assets/images/image1.jpg'
import heroanimation from '../animation3.json'
import Lottie from 'lottie-react'

export default function Hero() {
  return (
    <section className='hero'>
          <div className='headcontainer'>
            <h1>Welcome to Event Booking ticket platform</h1>
          <p>A platform to manage your events <br/>
          Trusted by 15000+ users</p>
          </div>
        <Lottie animationData={heroanimation} className='heroimage'/>
    </section>
  )
}
