import React, { useContext } from 'react';
import { BookingContext } from '../context';
import { Grid2 } from '../Styled';

import styled from 'styled-components';

const ActivityWrapper = styled.div`
  padding: 15px;
  border: 1px solid #3c6382;
  font-size: 14px;
  border-radius: 2px;

  p {
    padding: 0px;
    margin: 2px;
  }

  section {
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 5px; 
    margin: 0;
  }

  li {
    padding: 2px;
  }

  h4 {
    margin: 3px 0;
  }

  h2 {
    margin: 0 0 15px 0;
  }

  h3 {
    margin: 8px 0;
  }

`

export default ({ day }) => {
  const { data, actions } = useContext(BookingContext);
  return (
    <ActivityWrapper>
      <h2>Day {day + 1}</h2>
      <section>
        <h3>Itinerary <small><a href="#" onClick={console.log('im clicked')}>Add Itinerary</a></small></h3>
        <div style={{ padding: '5px', border: '1px dashed rgba(60, 99, 130,.30)', borderRadius: '2px', fontSize: '14px' }}>
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
        <h3>Transportation <small><a href="#" onClick={console.log('im clicked')}>Add Transportation</a></small></h3>
        <Grid2>
          <div style={{ padding: '5px', border: '1px dashed rgba(60, 99, 130,.30)', borderRadius: '2px', fontSize: '14px' }}>
            <h4>Van - LXC 201</h4>
            <p>Operator: Holiday </p>
            <p>Driver: Tom - 09177011882</p>
            <p>Tourguide: Mik - 09177011882</p>
            <a href="#">Delete</a>
          </div>
        </Grid2>
      </section>
      <section>
        <h3>Accommodation <small><a href="#" onClick={console.log('im clicked')}>Add Accommodation</a></small></h3>
        <Grid2>
          <div style={{ padding: '5px', border: '1px dashed rgba(60, 99, 130,.30)', borderRadius: '2px', fontSize: '14px' }}>
            <h4>Marco Polo Hotel</h4>
            <p>Reservation number: 12345 on Etours Account</p>
            <a href="#">Delete</a>
          </div>
        </Grid2>
      </section>
      <section>
        <h3>Expenses <small><a href="#" onClick={console.log('im clicked')}>Add/Edit</a></small></h3>
        <ul style={{ padding: '5px', border: '1px dashed rgba(60, 99, 130,.30)', borderRadius: '2px', fontSize: '14px' }}>
          <li>Crocodile park - P100 </li>
          <li>Crocodile park - P100</li>
          <li>Crocodile park - P100</li>
          <li>Crocodile park - P100</li>
          <li><strong>Total - P400</strong></li>
        </ul>
      </section>
    </ActivityWrapper>
  )
}