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
        <label htmlFor="">Tour Date: </label>
        <DayPickerInput />
      </div>
      <div>
        <label htmlFor="">Start time: </label>
        <input id="from" type="time" list="time" placeholder="Start time" />
      </div>
      <div>
        <label htmlFor="">End time: </label>
        <input id="to" type="time" list="time" name="to" placeholder="End time" />
      </div>
    </Grid4>
  )
}