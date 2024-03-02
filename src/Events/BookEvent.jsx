import React from 'react'
import './BookEvent.css'
import Navbar from '../components/Navbar'

export default function BookEvent() {
  return (
    <div>
        <Navbar/>
        <div className='bookcontainer'>
            <form>
                <input type='text' placeholder='Your name'/>
                <input type='email' placeholder='Your email'/>
                <select id="dropdown">
                <option value="" disabled selected hidden>Number of Tickets</option>
                <option value="option1">1</option>
                <option value="option2">2</option>
                <option value="option3">3</option>
                <option value="option3">4</option>
                <option value="option3">5</option>
                </select>
                <select id="dropdown">
                <option value="" disabled selected hidden>Tickets type</option>
                <option value="option1">Regular</option>
                <option value="option1">VIP</option>
                </select>
                <button>Book</button>
            </form>
        </div>
    </div>
  )
}
