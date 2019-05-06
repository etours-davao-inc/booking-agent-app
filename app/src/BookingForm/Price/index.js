import React, { useContext } from 'react';
import { BookingContext } from '../context';

export default () => {
  const { data, actions } = useContext(BookingContext);
  const price = data.userInput;
  return (
    <fieldset>
      <div className="pure-control-group">
        <label htmlFor="adultprice">Adult Price</label>
        <input id="adultprice" type="number" step="any" value={price.adults[1]} name="adults" onChange={e => actions.onPriceChange(e)}  />
      </div>
      <div className="pure-control-group">
        <label htmlFor="kid02price">Kid(0-2) Price</label>
        <input id="kid02price" type="number" step="any" value={price.kid02[1]} name="kid02" onChange={e => actions.onPriceChange(e)}  />
      </div>
      <div className="pure-control-group">
        <label htmlFor="kid35price">Kid(3-5) Price</label>
        <input id="kid35price" type="number" step="any" value={price.kid35[1]} name="kid35" onChange={e => actions.onPriceChange(e)}  />
      </div>
      <div className="pure-control-group">
        <label htmlFor="kid611price">Kid(6-11) Price</label>
        <input id="kid611price" type="number" step="any"  value={price.kid611[1]} name="kid611" onChange={e => actions.onPriceChange(e)}  />
      </div>
    </fieldset>
  )
} 