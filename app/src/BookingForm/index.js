import React from 'react';
import styled from 'styled-components';
import ItineraryEditor from './ItineraryEditor';

import { BookingProvider, BookingConsumer } from './context';
import { FormField, FormSection } from './Styled';

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
            <FormStyle className="pure-form">
              <h1>Booking Form {data.type} </h1>
              <FormSection>
                <FormField>
                  <label htmlFor="type">Booking Type</label>
                  <select id="type" name="type" onChange={e => actions.onSelectChange(e)}>
                    <option value="daytour">Day tour</option>
                    <option value="multiday">Multi Day Tour</option>
                  </select>
                </FormField>
              </FormSection>
              <FormSection>
                <h2>Contact Information</h2>
                <FormField>
                  <label htmlFor="name">Name: </label>
                  <input id="name" type="text" name="name" size={60} />
                </FormField>
                <FormField>
                  <label htmlFor="contact">Contact No: </label>
                  <input id="contact" type="text" name="contact" size={60} />
                </FormField>
                <FormField>
                  <label htmlFor="email">Email: </label>
                  <input id="email" type="text" name="email" size={60} />
                </FormField>
              </FormSection>
              <GuestInfo />
              <FormSection>
                <h2>Tourguide</h2>
                <select id="tourguide">
                  <option>Sam</option>
                  <option>Jojo</option>
                  <option>Milber</option>
                  <option>Shagay</option>
                </select>
              </FormSection>
              <FormSection>
                <h2>Vehicle</h2>
                <FormField>
                  <label htmlFor="vehicle_operator">Operator: </label>
                  <input id="vehicle_operator" type="text" name="vehicle_operator" />
                </FormField>
                <FormField>
                  <label htmlFor="">Vehicle: </label>
                  <fieldset className="pure-group">
                    <input id="vehicle_operator" type="text" name="vehicle_operator" placeholder="Type" />
                    <input id="vehicle_plate_no" type="text" name="vehicle_plate_no" placeholder="Plate Number" />
                  </fieldset>
                </FormField>
                <FormField>
                  <label htmlFor="">Driver: </label>
                  <fieldset className="pure-group">
                    <input id="vehicle_driver" type="text" name="vehicle_driver" placeholder="Name" />
                    <input id="vehicle_contact" type="text" name="vehicle_contact" placeholder="Contact" />
                  </fieldset>
                </FormField>
              </FormSection>
              <FormSection>
                <h2>Itinerary</h2>
                <FormField>
                  <ItineraryEditor />
                </FormField>
              </FormSection>
            </FormStyle>
          )
        }
        }
      </BookingConsumer>
    </BookingProvider>
  )
}