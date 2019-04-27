import React from 'react';
import { FormField } from '../../Styled';

import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';

export default () => (
  <React.Fragment>
    <FormField>
      <label htmlFor="">Arrival Date: </label>
      <DayPickerInput />
    </FormField>
    <FormField>
      <label htmlFor="">Flight number: </label>
      <input id="from_flight_no" type="text" name="from_flight_no" placeholder="Flight Number" />
    </FormField>
    <FormField>
      <label htmlFor="">Departurn Date: </label>
      <DayPickerInput />
    </FormField>
    <FormField>
      <label htmlFor="">Flight number: </label>
      <input id="to_flight_no" type="text" name="to_flight_no" placeholder="Flight Number" />
    </FormField>
  </React.Fragment>
)