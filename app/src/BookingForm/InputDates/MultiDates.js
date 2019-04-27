import React from 'react';
import { FormField } from '../Styled';

import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';

export default () => (
  <React.Fragment>
    <FormField>
      <label htmlFor="">Arrival Date: </label>
      <fieldset className="pure-group">
        <DayPickerInput />
        <input id="from_flight_no" type="text" name="from_flight_no" placeholder="Flight Number" />
      </fieldset>
    </FormField>
    <FormField>
      <label htmlFor="">Departurn Date: </label>
      <fieldset className="pure-group">
        <DayPickerInput />
        <input id="to_flight_no" type="text" name="to_flight_no" placeholder="Flight Number" />
      </fieldset>
    </FormField>
  </React.Fragment>
)