import React, { useContext } from 'react';
import { BookingContext } from '../context';

import Activity from './Activity';

export default () => {
  const { data, actions } = useContext(BookingContext);
  var activities = [];
  for (let i = 0; i < data.days; i++) {
    activities.push(<Activity day={i} />)
  }
  return activities
}