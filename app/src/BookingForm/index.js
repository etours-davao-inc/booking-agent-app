import React from 'react';
import styled from 'styled-components';
import ItineraryEditor from './ItineraryEditor';

import { BookingProvider, BookingConsumer } from './context';
import { Grid4 } from './Styled';

import GuestInfo from './GuestInfo';

const FormStyle = styled.form`
  max-width: 1280px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: white;
  border-radius: 2px;
  padding: 1rem;
`

export default () => {
  return (
    <BookingProvider>
      <BookingConsumer>
        {({ data, actions }) => {
          return (
            <FormStyle className="pure-form pure-form-stacked">
              <h1>Booking Form</h1>
              <fieldset>
                <label htmlFor="type">Booking Type</label>
                <select id="type" name="type" onChange={e => actions.onSelectChange(e)}>
                  <option value="daytour">Day tour</option>
                  <option value="multiday">Multi Day Tour</option>
                </select>
                <Grid4>
                  <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" size={30} />
                  </div>
                  <div>
                    <label htmlFor="contact">Contact No: </label>
                    <input id="contact" type="tel" name="contact" size={30} />
                  </div>
                  <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" name="email" size={30} />
                  </div>
                </Grid4>
                <GuestInfo />
                <label htmlFor="type">Tourguide</label>
                <select id="tourguide">
                  <option>Sam</option>
                  <option>Jojo</option>
                  <option>Milber</option>
                  <option>Shagay</option>
                </select>
                <label htmlFor="vehicle_operator">Operator: </label>
                <input id="vehicle_operator" type="text" name="vehicle_operator" />
                <label htmlFor="">Vehicle: </label>
                <input id="vehicle_operator" type="text" name="vehicle_operator" placeholder="Type" />
                <input id="vehicle_plate_no" type="text" name="vehicle_plate_no" placeholder="Plate Number" />
                <label htmlFor="">Driver: </label>
                <input id="vehicle_driver" type="text" name="vehicle_driver" placeholder="Name" />
                <input id="vehicle_contact" type="text" name="vehicle_contact" placeholder="Contact" />
                <ItineraryEditor />
              </fieldset>
            </FormStyle>
          )
        }}
      </BookingConsumer>
    </BookingProvider>
  )
}