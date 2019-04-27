import React from 'react';

import { FormField } from '../../Styled';

import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';

export default () => (
  <React.Fragment>
    <FormField>
      <label htmlFor="">Tour Date: </label>
      <DayPickerInput />
    </FormField>
    <FormField>
      <label htmlFor="">Start time: </label>
      <input id="from" list="time" placeholder="Start time" />
    </FormField>
    <FormField>
      <label htmlFor="">End time: </label>
      <input id="to" list="time" name="to" placeholder="End time" />
    </FormField>
    <datalist id="time">
      <option value="5:00 am" />
      <option value="6:00 am" />
      <option value="7:00 am" />
      <option value="8:00 am" />
      <option value="9:00 am" />
      <option value="10:00 am" />
      <option value="11:00 am" />
      <option value="12:00 pm" />
      <option value="1:00 pm" />
      <option value="2:00 pm" />
      <option value="3:00 pm" />
      <option value="4:00 pm" />
      <option value="5:00 pm" />
      <option value="6:00 pm" />
      <option value="7:00 pm" />
      <option value="8:00 pm" />
      <option value="9:00 pm" />
    </datalist>
  </React.Fragment>
)