import React, { useContext } from 'react';
import { BookingContext } from '../../context';
import { Grid3, FormStyle, FormBodyWrapper } from '../../Styled';

import Crew from './Crew';

export default () => {
  const { data, actions } = useContext(BookingContext);

  return (
    <FormStyle className="pure-form pure-form-stacked">
      <FormBodyWrapper>
        <h2>Transportation Editor</h2>
        <div style={{ border: '1px dashed silver', padding: '15px' }}>
          <Grid3>
            <div className="pure-control-group">
              <label htmlFor="vehicleType">Type: </label>
              <select id="vehicleType" name="vehicleType">
                <option>Van</option>
                <option>Bus</option>
                <option>Banca</option>
              </select>
            </div>
            <div className="pure-control-group">
              <label htmlFor="identifier">Identifier </label>
              <input id="identifier" type="text" name="identifier" placeholder="Plate Number" />
            </div>
            <div className="pure-control-group">
              <label htmlFor="vehicle_operator">Operator: </label>
              <input id="vehicle_operator" type="text" name="vehicle_operator" />
            </div>
          </Grid3>
          <Crew />
        </div>
        <fieldset style={{ textAlign: 'right', marginTop:"35px" }}>
          <button class="pure-button" onClick={() => actions.closeModal(false)}>Cancel</button>
          <button type="submit" class="pure-button pure-button-primary">Add</button>
        </fieldset>
      </FormBodyWrapper>
    </FormStyle>
  )
}