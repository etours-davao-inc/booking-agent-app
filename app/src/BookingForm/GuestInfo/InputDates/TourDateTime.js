import React from 'react';

import { Grid4 } from '../../Styled';

import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';

export default () => (
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