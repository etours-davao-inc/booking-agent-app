import React, { useContext, useState } from 'react';
import { BookingContext } from '../../context';
import ItineraryEditor from './ItineraryEditor';
import Write from '../../Write';

export default (props) => {
  const { data, actions } = useContext(BookingContext);
  const set = data.activities[props.day]
  return (
    <section>
      <h3>Itinerary <Write openModal={() => actions.openModal(<ItineraryEditor day={props.day} />)} /></h3>
      <div style={style.div}>
      { set ? 
        <span>
          <p><strong>Start time: </strong>{data.activities[props.day].from}</p>
          <p><strong>Pickup location:</strong> {data.activities[props.day].pickUp}</p>
          <div style={{margin: '10px'}}>
            {data.activities[props.day].details}
          </div>
          <p><strong>End time: </strong>{data.activities[props.day].to}</p>
          <p><strong>Drop Off location:</strong> {data.activities[props.day].dropOff}</p>
          </span>
      : null }   
      </div>
    </section>
  )
}

const style = {
  div: {
    minHeight: '15px',
    padding: '5px', 
    border: '1px dashed rgba(60, 99, 130,.30)', 
    borderRadius: '2px', 
    fontSize: '14px'
  }
}