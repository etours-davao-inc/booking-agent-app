import React from 'react';

import { Grid4 } from '../Styled';

import { BookingConsumer } from '../context';

export default () => (
  <BookingConsumer>
    {({ data, actions }) => {
      if (data.type === "multiday") {
        return (
          <Grid4>
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
              <select id="booking-type">
                <option>Etours Account</option>
                <option>Guest Account</option>
              </select>
            </div>
          </Grid4>
        )
      } else {
        return null
      }
    }}
  </BookingConsumer>
)