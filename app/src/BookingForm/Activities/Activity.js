import React, { useContext } from 'react';
import { BookingContext } from '../context';

import ItineraryEditor from '../ItineraryEditor';
import TourGuides from './TourGuides';
import Transportation from './Transportation';

import Accommodation from '../Activities/Accommodation';
import Time from './Time';

export default ({ day }) => {
  const { data, actions } = useContext(BookingContext);
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Day {day + 1}</h2>
      <TourGuides />
      <Transportation />
      <Accommodation />
      <Time />
      <ItineraryEditor />
    </div>
  )
}