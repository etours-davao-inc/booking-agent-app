import React, { useContext } from 'react';
import { BookingContext } from '../context';

import Itinerary from './Itinerary';

import Transportation from './Transportation';

import Accommodation from '../Activities/Accommodation';
import Expenses from './Expenses';

export default ({ day }) => {
  const { data, actions } = useContext(BookingContext);
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Day {day + 1}</h2>
      <Itinerary />
      <Transportation />
      <Accommodation />

      <Expenses />
    </div>
  )
}