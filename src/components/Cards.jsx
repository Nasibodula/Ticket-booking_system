import React from 'react'
import './Cards.css'
import sport from '../assets/icons/sport.png'
import business from '../assets/icons/business.png'
import concert from '../assets/icons/concert.png'
import festival from '../assets/icons/festival.png'
import conference from '../assets/icons/conference.png'
import foodndrink from '../assets/icons/foodndrink.png'


const Cards = ({ image, name, number}) => {
  return (
    <div className='cards'>
    <div className="card">
    <img src={image} alt="Card" />
    <div className="card-body">
      <h3>{name}</h3>
      <p>{number}</p>
    </div>
  </div>  
  </div>   
  )
}

const CardList = () => {
    const cards = [
    {
        id: 1,
        image: business,
        name:"Business",
        number:"0 event"
    },
    {
        id: 2,
        image:sport,
        name:"Sport",
        number:"0 event"
    },
    {
        id: 3,
        image:concert,
        name:"Concert",
        number:"0 event"
    },
    {
        id: 4,
        image:conference,
        name:"Conference",
        number:"0 event",
    },
    {
        id: 5,
        image:festival,
        name:"Festival",
        number:"0 event"
    },
    {
        id: 6,
        image:foodndrink,
        name:"Food & Drink",
        number:"0 event"
    }
]
return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Cards key={index} {...card} />
      ))}
    </div>
  );
};
export default CardList;