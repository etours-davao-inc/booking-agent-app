import React, { useContext } from 'react';
import { BookingContext } from '../../context';
import { Grid3 } from '../../Styled';

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <React.Fragment>
      <p>Crew</p>
      <Grid3>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select id="role" style={{ width: '187px' }}>
            <option>Tour guide</option>
            <option>Driver/Captain</option>
            <option>Coordinator</option>
            <option>Medic</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact">Contact</label>
          <input id="contact" type="tel" name="contact" />
        </div>
      </Grid3>
      <button>Add crew</button>
    </React.Fragment>
  )
}