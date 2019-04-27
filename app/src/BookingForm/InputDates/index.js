import React from 'react';

import TourDateTime from './TourDateTime';
import MultiDates from './MultiDates';

import { BookingConsumer } from '../context';

export default () => {
  return (
    <BookingConsumer>
      {({ data }) => {
        switch (data.type) {
          case "daytour":
            return <TourDateTime />
          case "multiday":
            return <MultiDates />
          default:
            return <TourDateTime />
        }
      }}
    </BookingConsumer>
  )
}