import React from 'react';
import styled from 'styled-components';
import ItineraryEditor from './ItineraryEditor';

const FormStyle = styled.form`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 2px;
  padding: 1rem;
`
const FormField = styled.div`
  display: flex;
  align-items: center;
  input, label {
    color: #2f3542;
  }
  label {
    width: 200px;
  }
  margin-bottom: 10px;
`

const FormSection = styled.section`
padding: 10px; 
`

export default props => (
  <React.Fragment>
    
    <FormStyle classNameName="pure-form">
      <h1>Booking Form</h1>
      <FormSection>
        <FormField>
          <label htmlFor="booking-type">Booking Type</label>
          <select id="booking-type">
            <option>Day tour</option>
            <option>Multi Day Tour</option>
          </select>
        </FormField>
      </FormSection>
      <FormSection>
        <h2>Contact Information</h2>
        <FormField>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" size={60}/>
        </FormField>
        <FormField>
          <label htmlFor="name">Contact No: </label>
          <input id="name" type="text" name="contact" size={60} />
        </FormField>
        <FormField>
          <label htmlFor="name">Email: </label>
          <input id="name" type="text" name="email" size={60} />
        </FormField>
      </FormSection>
      <FormSection>
        <h2>Guest Information</h2>
        <FormField>
          <label htmlFor="name">Number of Adults: </label>
          <input id="name" type="text" name="name" size={3} />
        </FormField>
        <FormField>
          <label htmlFor="name">Number of kids(0-2): </label>
          <input id="name" type="text" name="name" size={3} />
          </FormField>
        <FormField>  
          <label htmlFor="name">Number of kids(3-5): </label>
          <input id="name" type="text" name="name" size={3} />
          </FormField>
        <FormField>
          <label htmlFor="name">Number of kids 6-11: </label>
          <input id="name" type="text" name="name" size={3} />
        </FormField>
        <FormField>
          <label htmlFor="name">Arrival Date: </label>
          <fieldset className="pure-group">
            <input id="name" type="text" name="email" />
            <input id="name" type="text" name="contact" placeholder="Flight Number"/>
          </fieldset>
        </FormField>
        <FormField>
          <label htmlFor="name">Departurn Date: </label>
          <fieldset className="pure-group">
            <input id="name" type="text" name="email" />
            <input id="name" type="text" name="contact" placeholder="Flight Number"/>
          </fieldset>
        </FormField>
        <FormField>
          <label htmlFor="name">Tour Date: </label>
          <fieldset className="pure-group">
            <input id="name" type="text" name="email" />
            <input id="name" type="text" name="contact" placeholder="Start time"/>
            <input id="name" type="text" name="contact" placeholder="End time"/>
          </fieldset>
        </FormField>        
      </FormSection>
      <FormSection id="guest-info">
        <h2>Accommmodation Info</h2>
        <FormField>
          <label htmlFor="name">Hotel: </label>
          <input id="name" type="text" name="name" size={50} />
        </FormField>
        <FormField>
          <label htmlFor="name">Reservation number</label>
          <input id="name" type="text" name="contact"/>
        </FormField>
        <FormField>
          <label htmlFor="name">Room number </label>
          <input id="name" type="text" name="contact" size={5} />
        </FormField>
        <FormField>  
          <label htmlFor="name">Reservation Type</label>
          <select id="booking-type">
            <option>Etours Account</option>
            <option>Guest Account</option>
          </select>
        </FormField>      
      </FormSection>
      <FormSection id="guest-info">
        <h2>Airport Pickup</h2>
        <FormField>
          <label htmlFor="name">With Airport Pickup</label>
          <input type="checkbox" />
        </FormField>
      </FormSection>
      <FormSection id="guest-info">
        <h2>Tourguide</h2>
        <select id="booking-type">
          <option>Sam</option>
          <option>Jojo</option>
          <option>Milber</option>
          <option>Shagay</option>
        </select>    
      </FormSection>
      <FormSection id="guest-info">
        <h2>Vehicle</h2>
        <FormField>
          <label htmlFor="name">Operator: </label>
          <input id="name" type="text" name="contact" />
        </FormField>
        <FormField>    
          <label htmlFor="name">Vehicle: </label>
          <fieldset className="pure-group">
            <input id="name" type="text" name="contact" placeholder="Type"/>
            <input id="name" type="text" name="contact" placeholder="Plate Number"/>
          </fieldset>
        </FormField>
        <FormField>    
          <label htmlFor="name">Driver: </label>
          <fieldset className="pure-group">
            <input id="name" type="text" name="contact" placeholder="Name"/>
            <input id="name" type="text" name="contact" placeholder="Contact"/>
          </fieldset>
        </FormField>     
      </FormSection>
      <FormSection id="guest-info">
        <h2>Itinerary</h2>
        <FormField>
          <ItineraryEditor />
        </FormField>      
      </FormSection>
    </FormStyle>
  </React.Fragment>

)