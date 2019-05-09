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
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const FormGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr 1fr;
  font-size: 16px;
  margin: 15px 0;
  border: 1px solid #3c6382;

  label {
    text-align: right;
    padding: 10px;
    border: 1px solid #3c6382;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 15px;
    padding-left: 8px;
    color: gray;
    border: none;
    border: 1px solid #3c6382;
  }

  .DayPickerInput {
    display: block;
    height: 100%;
  }

  select {
    border-radius: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background-color: white;
    appearance: none;
    font-size: 15px;
    padding-left: 8px;
    color: gray;
    border: 1px solid #3c6382;
  }
`
const ContactGrid = styled.div`
  display: inline-grid;
  grid-template-columns: auto 1fr;
`
const PaxGrid = styled.div`
  display: inline-grid;
  grid-template-columns: 130px 65px;

  input {
    text-align: center;
  }
`
const PriceGrid = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
`
const DateGrid = styled.div`
  display: inline-grid;
  grid-template-columns: auto 1fr;
`
const GeneratedInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`


export default () => {
  const { data, actions } = useContext(BookingContext);
  const inquiryDate = format(data.userInput.inquiryDate, 'MMMM DD, YYYY');
  const pax = data.userInput;
  const price = data.userInput;
  return (
    <BookingFormWrapper>
      <h1>Booking Form</h1>
      <FormGridWrapper>
        <ContactGrid col1="auto" col2="1fr">
          <label className="test">Booking Type</label>
          <select className="test" name="type" onChange={e => actions.onSelectChange(e)} value={data.type}>
            <option value="daytour">Day tour</option>
            <option value="multiday">Multi Day Tour</option>
          </select>
          <label>Name</label>
          <input type="text" name="name" value={data.userInput.name} onChange={e => actions.onUserInputChange(e)} />
          <label>Contact No</label>
          <input type="tel" name="contact" value={data.userInput.contact} onChange={e => actions.onUserInputChange(e)} />
          <label>Email: </label>
          <input type="email" name="email" value={data.userInput.email} onChange={e => actions.onUserInputChange(e)} />
        </ContactGrid>
        <PaxGrid>
          <label htmlFor="adults">Adults: </label>
          <input id="adults" type="number" name="adults" value={pax.adults[0]} onChange={e => actions.onPaxChange(e)} />
          <label htmlFor="kid02">Kids (0-2): </label>
          <input id="kid02" type="number" name="kid02" value={pax.kid02[0]} onChange={e => actions.onPaxChange(e)} />
          <label htmlFor="kid35">Kids (3-5): </label>
          <input id="kid35" type="number" name="kid35" value={pax.kid35[0]} onChange={e => actions.onPaxChange(e)} />
          <label htmlFor="kid611">Kids (6-11): </label>
          <input id="kid611" type="number" name="kid611" value={pax.kid611[0]} onChange={e => actions.onPaxChange(e)} />
        </PaxGrid>
        <PriceGrid>
          <label htmlFor="adultprice">Adult Price</label>
          <input id="adultprice" type="number" step="any" value={price.adults[1]} name="adults" onChange={e => actions.onPriceChange(e)} />
          <label htmlFor="kid02price">Kid(0-2) Price</label>
          <input id="kid02price" type="number" step="any" value={price.kid02[1]} name="kid02" onChange={e => actions.onPriceChange(e)} />
          <label htmlFor="kid35price">Kid(3-5) Price</label>
          <input id="kid35price" type="number" step="any" value={price.kid35[1]} name="kid35" onChange={e => actions.onPriceChange(e)} />
          <label htmlFor="kid611price">Kid(6-11) Price</label>
          <input id="kid611price" type="number" step="any" value={price.kid611[1]} name="kid611" onChange={e => actions.onPriceChange(e)} />
        </PriceGrid>
        <DateGrid>
          <label htmlFor="">Arrival Date: </label>
          <DayPickerInput onDayChange={date => actions.onDatesChange(date, 'from')} />
          <label htmlFor="">Flight number: </label>
          <input id="from_flight_no" type="text" name="from_flight_no" placeholder="Arrival Flight No" />
          <label htmlFor="">Departure Date: </label>
          <DayPickerInput onDayChange={date => actions.onDatesChange(date, 'to')} />
          <label htmlFor="">Flight number: </label>
          <input id="to_flight_no" type="text" name="to_flight_no" placeholder="Departure Flight No" />
        </DateGrid>
      </FormGridWrapper>
      <GeneratedInfoWrapper>
        <Computation />
        <Activities />
      </GeneratedInfoWrapper>
    </BookingFormWrapper>
  )
}