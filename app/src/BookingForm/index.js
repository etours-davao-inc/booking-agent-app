import React, { useContext } from 'react';

import { BookingContext } from './context';
import { Grid3, FormStyle, BookingFormWrapper } from './Styled';

import GuestInfo from './GuestInfo';
import Activities from './Activities';
import InputDates from './InputDates';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <BookingFormWrapper>
      <h1>Booking Form {data.type}</h1>
      <FormStyle className="pure-form pure-form-aligned">
        <div className="pure-control-group">
          <label htmlFor="type">Booking Type</label>
          <select id="type" name="type" onChange={e => actions.onSelectChange(e)}>
            <option value="daytour">Day tour</option>
            <option value="multiday">Multi Day Tour</option>
          </select>
        </div>
      </FormStyle>
      <FormStyle className="pure-form pure-form-aligned">
        <Grid3>
          <fieldset>
            <div className="pure-control-group">
              <label htmlFor="name">Name: </label>
              <input id="name" type="text" name="name" size={30} />
            </div>
            <div className="pure-control-group">
              <label htmlFor="contact">Contact No: </label>
              <input id="contact" type="tel" name="contact" size={30} />
            </div>
            <div className="pure-control-group">
              <label htmlFor="email">Email: </label>
              <input id="email" type="email" name="email" size={30} />
            </div>
          </fieldset>
          <GuestInfo />
          <InputDates />
        </Grid3>
      </FormStyle>
      <div>
        <label htmlFor="days">No of Days </label>
        <input id="days" type="number" name="days" value={data.days} onChange={e => actions.onInputChange(e)} />
      </div>
      <Activities />
    </BookingFormWrapper>
  )
}