import './EventDetails.css'

const EventDetails = ({ event }) => {

  return (
    <div className="event-details">
      <h4>{event.eventtitle}</h4>
      <p><strong>Name: </strong>{event.eventname}</p>
      <p><strong>Date: </strong>{event.eventdate}</p>
      <p><strong>Venue:</strong>{event.eventvenue}</p>
      <p><strong>Participant Limint:</strong>{event.eventlimit}</p>
      <p><strong>Event description:</strong>{event.eventdescription}</p>
      <p><strong>Cost:</strong>{event.eventcost}</p>
      <p>{event.eventimage}</p>
      <p>{event.createdAt}</p>
    </div>
  )
}

export default EventDetails