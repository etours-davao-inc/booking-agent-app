import React, { useContext } from 'react';
import { BookingContext } from '../context';
import { Grid2 } from '../Styled';

export default ({ day }) => {
  const { data, actions } = useContext(BookingContext);
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Day {day + 1}</h2>
      <section>
        <p>Itinerary <small><a href="#" onClick={console.log('im clicked')}>Add Itinerary</a></small></p>
        <div style={{ padding: '5px', border: '1px solid #3c6382', fontSize: '14px' }}>
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
      </section>
      <section>
        <p>Transportation <small><a href="#" onClick={console.log('im clicked')}>Add Transportation</a></small></p>
        <Grid2>
          <div style={{ padding: '5px', border: '1px solid #3c6382', fontSize: '14px' }}>
            <p>Type: Van</p>
            <p>Identifier: LXC 201 </p>
            <p>Operator: Holiday </p>
            <p>Crew:</p>
            <ul>
              <li>Driver: Tom - 09177011882</li>
              <li>Tourguide: Mik - 09177011882</li>
            </ul>
            <a href="#">Delete</a>
          </div>
        </Grid2>
      </section>
      <section>
        <p>Accommodation <small><a href="#" onClick={console.log('im clicked')}>Add Accommodation</a></small></p>
        <div style={{ padding: '5px', border: '1px solid #3c6382', fontSize: '14px' }}>
          <p>Hotel: Marco Polo Hotel</p>
          <p>Type: Etours Account </p>
          <p>Reservation num: 12345 </p>
          <a href="#">Delete</a>
        </div>
      </section>
      <section>
        <p>Expenses <small><a href="#" onClick={console.log('im clicked')}>Add/Edit</a></small></p>
        <div style={{ padding: '5px', border: '1px solid #3c6382', fontSize: '14px' }}>
          <p>Crocodile park - P100 </p>
          <p>Crocodile park - P100</p>
          <p>Crocodile park - P100</p>
          <p>Crocodile park - P100</p>
          <p>Total - P400</p>
        </div>
      </section>
    </div>
  )
}