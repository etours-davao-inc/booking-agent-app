import React, { useContext } from 'react';
import { BookingContext } from '../../context';
import { Grid3 } from '../../Styled';

import Crew from './Crew';

export default () => {
  const { data, actions } = useContext(BookingContext);

  return (
    <React.Fragment>
      <div style={{ padding: '5px', border: '1px solid gray' }}>
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
      </div>
      <button>Add Transportation</button>
    </React.Fragment>
  )
}