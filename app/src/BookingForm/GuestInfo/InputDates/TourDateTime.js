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
    </Grid4>
  )
}