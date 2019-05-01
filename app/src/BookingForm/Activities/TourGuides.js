import React, { useContext } from 'react';
import { BookingContext } from '../context';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <React.Fragment>
      <label htmlFor="type">Tourguide</label>
      <select id="tourguide" style={{width: '187px'}}>
        <option>Sam</option>
        <option>Jojo</option>
        <option>Milber</option>
        <option>Shagay</option>
      </select>
    </React.Fragment>
  )
}