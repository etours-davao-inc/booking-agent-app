import React, { useContext } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { BookingContext } from '../../context';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <div className="pure-control-group">
      <label htmlFor="">Tour Date: </label>
      <DayPickerInput />
    </div>
  )
}