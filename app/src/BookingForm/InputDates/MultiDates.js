import React, { useContext } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

import { BookingContext } from '../context';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <fieldset>
      <div className="pure-control-group">
        <label htmlFor="">Arrival Date: </label>
        <DayPickerInput 
          onDayChange={date => actions.onDatesChange(date, 'from')} />
      </div>
      <div className="pure-control-group">
        <label htmlFor="">Flight number: </label>
        <input id="from_flight_no" type="text" name="from_flight_no" placeholder="Arrival Flight No" />
      </div>
      <div className="pure-control-group">
        <label htmlFor="">Departure Date: </label>
        <DayPickerInput 
          onDayChange={date => actions.onDatesChange(date, 'to')} />
      </div>
      <div className="pure-control-group">
        <label htmlFor="">Flight number: </label>
        <input id="to_flight_no" type="text" name="to_flight_no" placeholder="Departure Flight No" />
      </div>
    </fieldset>
  )
}