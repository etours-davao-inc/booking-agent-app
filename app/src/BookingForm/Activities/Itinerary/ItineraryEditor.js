import React, { useContext } from 'react';

import { FormStyle, FormBodyWrapper, Grid3 } from '../../Styled';

import { BookingContext } from '../../context';

export default (props) => {
  const { data, actions } = useContext(BookingContext);
  const handleSubmit = (e) => {
    e.preventDefault()
    let itinerary = {}
    itinerary.from = e.target.elements.from.value
    itinerary.to = e.target.elements.to.value
    itinerary.pickUp = e.target.elements.pickUp.value
    itinerary.dropOff = e.target.elements.dropOff.value
    itinerary.details = e.target.elements.details.value
    actions.updateItinerary(props.day, itinerary)
    actions.closeModal()
  }

  return (
    <FormStyle className="pure-form pure-form-stacked" onSubmit={e => handleSubmit(e)}>
      <FormBodyWrapper>
        <h2>Itinerary Editor</h2>
        <p>Day {props.day + 1}</p>
        <Grid3>
          <div className="pure-control-group">
            <label htmlFor="pickUp">Pick up location  </label>
            <input id="pickUp" type="text" name="pickUp" defaultValue={data.activities[props.day].pickUp} />
          </div>
          <div className="pure-control-group">
            <label htmlFor="">Start time: </label>
            <input id="from" type="text" list="time" name="from" defaultValue={data.activities[props.day].from} />
          </div>
        </Grid3>
        <Grid3>
          <div className="pure-control-group">
            <label htmlFor="dropOff">Drop off location </label>
            <input id="dropOff" type="text" name="dropOff" defaultValue={data.activities[props.day].dropOff} />
          </div>
          <div className="pure-control-group">
            <label htmlFor="">End time: </label>
            <input id="to" type="text" list="time" name="to" defaultValue={data.activities[props.day].to} />
          </div>
        </Grid3>
        <textarea id="details" name="details" style={{ width: '100%', height: '350px' }} defaultValue={data.activities[props.day].details}></textarea>
        <fieldset style={{ textAlign: 'right' }}>
          <button class="pure-button" onClick={() => actions.closeModal(false)}>Cancel</button>
          <input type="submit" class="pure-button pure-button-primary" value="Submit" />
        </fieldset>
      </FormBodyWrapper>
    </FormStyle>
  );
}
