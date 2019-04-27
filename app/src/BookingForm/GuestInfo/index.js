import React from 'react';
import styled from 'styled-components';

import { FormField, FormSection } from '../Styled';

import InputDates from './InputDates';

import { BookingConsumer } from '../context';

const GuestInfoGrid = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 216px;
`

export default () => {
  return (
    <BookingConsumer>
      {({ data, actions }) => (
        <FormSection>
          <h2>Guest Information</h2>
          <GuestInfoGrid>
            <div>
              <FormField>
                <label htmlFor="adults">Number of Adults: </label>
                <input id="adults" type="text" name="adults" size={3} />
              </FormField>
              <FormField>
                <label htmlFor="kid02">Number of kids(0-2): </label>
                <input id="kid02" type="text" name="kid02" size={3} />
              </FormField>
              <FormField>
                <label htmlFor="kid35">Number of kids(3-5): </label>
                <input id="kid35" type="text" name="kid35" size={3} />
              </FormField>
              <FormField>
                <label htmlFor="kid611">Number of kids 6-11: </label>
                <input id="kid611" type="text" name="kid611" size={3} />
              </FormField>
            </div>
            <div>
              <InputDates />
            </div>
          </GuestInfoGrid>
        </FormSection>
      )}

    </BookingConsumer>
  )
} 