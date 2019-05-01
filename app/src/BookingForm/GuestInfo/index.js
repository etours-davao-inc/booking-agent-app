import React, { useContext } from 'react';
import InputDates from './InputDates';

import { BookingContext } from '../context';

import { Grid4 } from '../Styled';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <React.Fragment>
      <Grid4>
        <div>
          <label htmlFor="adults">Number of Adults: </label>
          <input id="adults" type="number" name="adults" style={{ width: '75px' }} />
        </div>
        <div>
          <label htmlFor="kid02">Number of kids (0-2): </label>
          <input id="kid02" type="number" name="kid02" style={{ width: '75px' }} />
        </div>
        <div>
          <label htmlFor="kid35">Number of kids (3-5): </label>
          <input id="kid35" type="number" name="kid35" style={{ width: '75px' }} />
        </div>
        <div>
          <label htmlFor="kid611">Number of kids (6-11): </label>
          <input id="kid611" type="number" name="kid611" style={{ width: '75px' }} />
        </div>
      </Grid4>
      <InputDates />

    </React.Fragment>

  )
} 