import React, { useContext } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Grid4 } from '../../Styled';

import { BookingContext } from '../../context';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <Grid4>
      <div>
        <label htmlFor="">Arrival Date: </label>
        <DayPickerInput />
      </div>
      <div>
        <label htmlFor="">Flight number: </label>
        <input id="from_flight_no" type="text" name="from_flight_no" placeholder="Arrival Flight No" />
      </div>
      <div>
        <label htmlFor="">Departure Date: </label>
        <DayPickerInput />
      </div>
      <div>
        <label htmlFor="">Flight number: </label>
        <input id="to_flight_no" type="text" name="to_flight_no" placeholder="Departure Flight No" />
      </div>
    </Grid4>
  )
}