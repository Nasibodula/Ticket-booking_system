import React from 'react'
import './Contact.css'
import Lottie from 'lottie-react'
import contactanimation from '../animation1.json'
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='contact'>
        <h3>DROP US A</h3>
        <h1>MESSAGE</h1>
      <div className='contactcontainer'>
        <Lottie animationData={contactanimation} className='lottie'/>
        <form>
            <input type='text' placeholder='YOUR NAME'/>
            <input type='email' placeholder='EMAIL ID'/>
            <input placeholder='SUBJECT'/>
            <textarea id="textarea" name="textarea" rows="4" cols="60" placeholder="MESSAGE"/>
        </form>
      </div>
      </div>
    </div>
  )
}
