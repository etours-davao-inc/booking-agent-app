import React, { useContext } from 'react';
import { BookingContext } from '../../context';

export default () => {
  const { data, actions } = useContext(BookingContext);

  return (
    <React.Fragment>
      <p>Itinerary <small><a href="#" onClick={console.log('im clicked')}>Add Itinerary</a></small></p>
      <div style={{ padding: '5px', border: '1px solid #3c6382', fontSize:'14px' }}>
      <p>Start: 1:00 PM - Pickup at Airport</p>
      <div>
        <ul>
          <li>Crocodile Park</li>
          <li>Eden Nature Park</li>
          <li>Lunch</li>
          <li>Philippine Eagle</li>
          <li>Malagos Resort</li>
        </ul>
      </div>
      <p>End: 6:00 PM - Drop off at Hotel</p>
      </div>
    </React.Fragment>
  )
}