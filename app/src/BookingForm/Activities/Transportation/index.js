import React, { useContext } from 'react';
import { BookingContext } from '../../context';
import { Grid3, FormStyle } from '../../Styled';

import Crew from './Crew';

export default () => {
  const { data, actions } = useContext(BookingContext);

  return (
    <FormStyle className="pure-form pure-form-aligned">
      <Grid3>
        <div>
          <label htmlFor="vehicleType">Type: </label>
          <select id="type" name="vehicleType" style={{ width: '187px' }}>
            <option>Van</option>
            <option>Bus</option>
            <option>Banca</option>
          </select>
        </div>
        <div>
          <label htmlFor="identifier">Identifier </label>
          <input id="identifier" type="text" name="identifier" placeholder="Plate Number" />
        </div>
        <div>
          <label htmlFor="vehicle_operator">Operator: </label>
          <input id="vehicle_operator" type="text" name="vehicle_operator" />
        </div>
      </Grid3>
      <Crew />
      <button>Add Transportation</button>
    </FormStyle>
  )
}