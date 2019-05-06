import React, { useContext } from 'react';

import { BookingContext } from './context';
import { Grid5, FormStyle, BookingFormWrapper } from './Styled';

import NumPax from './NumPax';
import Activities from './Activities';
import InputDates from './InputDates';
import Price from './Price';
import Computation from './Computation';

import styled from 'styled-components';

import { format } from 'date-fns'

const GeneratedInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`

export default () => {
  const { data, actions } = useContext(BookingContext);
  const inquiryDate = format(data.userInput.inquiryDate, 'MMMM DD, YYYY')
  return (
    <BookingFormWrapper>
      <h1>Booking Form {data.type}</h1>
      <FormStyle className="pure-form pure-form-stacked">
        <div className="pure-control-group">
          <label htmlFor="type">Booking Type</label>
          <select id="type" name="type" onChange={e => actions.onSelectChange(e)}>
            <option value="daytour">Day tour</option>
            <option value="multiday">Multi Day Tour</option>
          </select>
        </div>
      </FormStyle>
      <FormStyle className="pure-form pure-form-stacked">
        <Grid5>
          <fieldset>
            <div className="pure-control-group">
              <label htmlFor="inquiryDate">Inquiry Date: </label>
              <input id="inquiryDate" type="text" name="inquiryDate" value={inquiryDate} size={30} readonly />
            </div>
            <div className="pure-control-group">
              <label htmlFor="name">Name: </label>
              <input id="name" type="text" name="name" value={data.userInput.name} onChange={e => actions.onUserInputChange(e)} size={30} />
            </div>
            <div className="pure-control-group">
              <label htmlFor="contact">Contact No: </label>
              <input id="contact" type="tel" name="contact" value={data.userInput.contact} onChange={e => actions.onUserInputChange(e)} size={30} />
            </div>
            <div className="pure-control-group">
              <label htmlFor="email">Email: </label>
              <input id="email" type="email" name="email" value={data.userInput.email} onChange={e => actions.onUserInputChange(e)} size={30} />
            </div>
          </fieldset>
          <NumPax />
          <Price />
          <InputDates />
        </Grid5>
      </FormStyle>
      <GeneratedInfoWrapper>
        <Computation />
        <Activities />
      </GeneratedInfoWrapper>
    </BookingFormWrapper>
  )
}