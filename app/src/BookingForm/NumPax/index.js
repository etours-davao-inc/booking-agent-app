import React, { useContext } from 'react';
import { BookingContext } from '../context';

import { FormStyle } from '../Styled';

export default () => {
  const { data, actions } = useContext(BookingContext);
  const pax = data.userInput
  return (
    <fieldset>
      <div className="pure-control-group">
        <label htmlFor="adults">Number of Adults: </label>
        <input id="adults" type="number" name="adults" value={pax.adults[0]} onChange={e => actions.onPaxChange(e)} />
      </div>
      <div className="pure-control-group">
        <label htmlFor="kid02">Number of kids (0-2): </label>
        <input id="kid02" type="number" name="kid02" value={pax.kid02[0]} onChange={e => actions.onPaxChange(e)} />
      </div>
      <div className="pure-control-group">
        <label htmlFor="kid35">Number of kids (3-5): </label>
        <input id="kid35" type="number" name="kid35" value={pax.kid35[0]} onChange={e => actions.onPaxChange(e)} />
      </div>
      <div className="pure-control-group">
        <label htmlFor="kid611">Number of kids (6-11): </label>
        <input id="kid611" type="number" name="kid611" value={pax.kid611[0]} onChange={e => actions.onPaxChange(e)} />
      </div>
    </fieldset>
  )
} 