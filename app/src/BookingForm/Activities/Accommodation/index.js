import React, { useContext } from 'react';
import { FormStyle, FormBodyWrapper } from '../../Styled';
import { BookingContext } from '../../context';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <FormStyle className="pure-form pure-form-stacked">
      <FormBodyWrapper>
        <h2>Accommodation Editor</h2>
        <div style={{ border: '1px dashed silver', padding: '15px' }}>
          <div className="pure-control-group">
            <label htmlFor="hotel">Hotel: </label>
            <input id="hotel" type="text" name="hotel" />
          </div>
          <div className="pure-control-group">
            <label htmlFor="hotel_reservation_number">Reservation number</label>
            <input id="hotel_reservation_number" type="text" name="hotel_reservation_number" />
          </div>
          <div className="pure-control-group">
            <label htmlFor="">Reservation Type</label>
            <select id="booking-type" style={{ width: '187px' }}>
              <option>Etours Account</option>
              <option>Guest Account</option>
            </select>
          </div>
          <fieldset style={{ textAlign: 'right', marginTop: "35px" }}>
            <button class="pure-button" onClick={() => actions.closeModal(false)}>Cancel</button>
            <button type="submit" class="pure-button pure-button-primary">Add</button>
          </fieldset>
        </div>
      </FormBodyWrapper>
    </FormStyle>
  )
}