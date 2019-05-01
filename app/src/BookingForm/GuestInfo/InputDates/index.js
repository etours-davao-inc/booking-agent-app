import React, { useContext } from 'react';

import TourDateTime from './TourDateTime';
import MultiDates from './MultiDates';

import { BookingContext } from '../../context';

export default () => {
  const { data, actions } = useContext(BookingContext);
  switch (data.type) {
    case "daytour":
      return <TourDateTime />
    case "multiday":
      return <MultiDates />
    default:
      return <TourDateTime />
  }
}