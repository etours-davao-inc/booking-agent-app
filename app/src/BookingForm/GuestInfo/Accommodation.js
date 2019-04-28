import React from 'react';

import { FormField, FormSection } from '../Styled';

import { BookingConsumer } from '../context';

export default () => (
  <BookingConsumer>
    {({ data, actions }) => {
      if (data.type === "multiday") {
        return (
          <FormSection>
            <h2>Accommmodation Info</h2>
            <FormField>
              <label htmlFor="hotel">Hotel: </label>
              <input id="hotel" type="text" name="hotel" size={50} />
            </FormField>
            <FormField>
              <label htmlFor="hotel_reservation_number">Reservation number</label>
              <input id="hotel_reservation_number" type="text" name="hotel_reservation_number" />
            </FormField>
            <FormField>
              <label htmlFor="hotel_room_number">Room number </label>
              <input id="hotel_room_number" type="text" name="hotel_room_number" size={5} />
            </FormField>
            <FormField>
              <label htmlFor="">Reservation Type</label>
              <select id="booking-type">
                <option>Etours Account</option>
                <option>Guest Account</option>
              </select>
            </FormField>
          </FormSection>
        )
      } else {
        return null
      }
    }}
  </BookingConsumer>
)