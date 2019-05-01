import React, { useContext } from 'react';

import { BookingContext } from './context';
import { Grid4, FormStyle } from './Styled';

import GuestInfo from './GuestInfo';
import Activities from './Activities';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <FormStyle className="pure-form pure-form-stacked">
      <h1>Booking Form {data.type}</h1>
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
        {/* To do: Implement Day */}
        <div>
            <label htmlFor="days">No of Days </label>
            <input id="days" type="number" name="days" value={data.days} onChange={e => actions.onInputChange(e)}/>
          </div>
        <Activities />
      </fieldset>
    </FormStyle>
  )
}