import React, { useContext } from 'react';
import { FormStyle } from '../../Styled';
import { BookingContext } from '../../context';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <FormStyle className="pure-form pure-form-aligned">
      <div>
        <label htmlFor="hotel">Hotel: </label>
        <input id="hotel" type="text" name="hotel" />
      </div>
      <div>
        <label htmlFor="hotel_reservation_number">Reservation number</label>
        <input id="hotel_reservation_number" type="text" name="hotel_reservation_number" />
      </div>
      <div>
        <label htmlFor="">Reservation Type</label>
        <select id="booking-type" style={{ width: '187px' }}>
          <option>Etours Account</option>
          <option>Guest Account</option>
        </select>
      </div>
    </FormStyle>
  )
}