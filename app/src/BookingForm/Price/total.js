import React, { useContext } from 'react';
import { BookingContext } from '../context';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <fieldset>
      <div className="pure-control-group">
        <label htmlFor="downpayment">Downpayment</label>
        <input id="downpayment" type="number" name="downpayment" disabled />
      </div>
      <div className="pure-control-group">
        <label htmlFor="total">Total</label>
        <input id="total" type="number" name="total" disabled />
      </div>
      <div className="pure-control-group">
        <label htmlFor="balance">Balance</label>
        <input id="balance" type="number" name="balance" disabled />
      </div>
    </fieldset>
  )
} 