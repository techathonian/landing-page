import React from 'react'
import { FutureEventSwipper } from './FutureEventSwipper';
import { Events } from '../../store/data';

export const FutureEvents = () => {

  const renderEvents = Events.map((events, key)=>{

    return(
      
      <div  value={events} key={key}>
        <FutureEventSwipper event={events.eventTitle} text={events.text} />
      </div>

    )
  })
  return (
    <div >
      <FutureEventSwipper event={renderEvents} />
    </div>
  )
}
