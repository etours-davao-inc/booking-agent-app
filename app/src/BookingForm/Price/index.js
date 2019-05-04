import React, { useContext } from 'react';
import { BookingContext } from '../context';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <fieldset>
      <div className="pure-control-group">
        <label htmlFor="adultprice">Adult Price</label>
        <input id="adultprice" type="number" name="adultprice" />
      </div>
      <div className="pure-control-group">
        <label htmlFor="kid02price">Kid(0-2) Price</label>
        <input id="kid02price" type="number" name="kid02price" />
      </div>
      <div className="pure-control-group">
        <label htmlFor="kid35price">Kid(3-5) Price</label>
        <input id="kid35price" type="number" name="kid35price" />
      </div>
      <div className="pure-control-group">
        <label htmlFor="kid611price">Kid(6-11) Price</label>
        <input id="kid611price" type="number" name="kid611price" />
      </div>
    </fieldset>
  )
} 