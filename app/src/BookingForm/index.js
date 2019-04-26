import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 960px;
  margin: 0 auto;
  /* display: grid;
  grid-template-areas: "header header"
                       "contact .";
  h1 {
    text-align: center;
    grid-area: header;
  }

  #contact-info {
    grid-area: contact;
  } */
`
const FormField = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  input, label {
    font-size: 18px;
    line-height: 24px;
    color: #2f3542;
  }
  label {
    display: inline-block;
    vertical-align: bottom;
  }
  margin-bottom: 10px;
`

const FormSection = styled.section`
padding: 10px; 
`

export default props => (
  <React.Fragment>
    
    <FormStyle>
      <h1>Booking Form</h1>
      <FormSection id="contact-info">
        <h2>Contact Information</h2>
        <FormField>
          <label for="name">Name: </label>
          <input id="name" type="text" name="name" />
        </FormField>
        <FormField>
          <label for="name">Contact No: </label>
          <input id="name" type="text" name="contact" />
        </FormField>
        <FormField>
          <label for="name">Email: </label>
          <input id="name" type="text" name="email" />
        </FormField>
      </FormSection>
      <FormSection id="guest-info">
        <h2>Guest Information</h2>
        <FormField>
          <label for="name">Number of Adults: </label>
          <input id="name" type="text" name="name" />
          <label for="name">Number of kids(0-2): </label>
          <input id="name" type="text" name="name" />
          <label for="name">Number of kids(3-5): </label>
          <input id="name" type="text" name="name" />
          <label for="name">Number of kids 6-11: </label>
          <input id="name" type="text" name="name" />
        </FormField>
        <FormField>
          <label for="name">Arrival Date: </label>
          <input id="name" type="text" name="contact" />
          <label for="name">Flight Number: </label>
          <input id="name" type="text" name="contact" />
        </FormField>
        <FormField>
          <label for="name">Departurn Date: </label>
          <input id="name" type="text" name="email" />
          <label for="name">Flight Number: </label>
          <input id="name" type="text" name="contact" />
        </FormField>
        <FormField>
          <label for="name">Tour Date: </label>
          <input id="name" type="text" name="email" />
          <label for="name">Flight Number: </label>
          <input id="name" type="text" name="contact" />
        </FormField>        
      </FormSection>
      <FormSection id="guest-info">
        <h2>Accommmodation Info</h2>
        <FormField>
          <label for="name">Hotel: </label>
          <input id="name" type="text" name="name" />
          <label for="name">Room number </label>
          <input id="name" type="text" name="name" />
          <label for="hotelReservationType">Etours Account</label>
          <input id="hotelReservationType" type="radio" name="hotelReservationType" value="Etours Account"/>
          <input type="text" name="name" placeholder="Reservation number"/>
          <label for="customerAccount">Customer Account</label>
          <input id="customerAccount" type="radio" name="hotelReservationType" value="Guests Account"/>
        </FormField>      
      </FormSection>
      <FormSection id="guest-info">
        <h2>Pick-up Information</h2>
        <FormField>
          <input id="pickup-airport" type="radio" name="name" />
          <label for="pickup-airpot">Airport</label>
          <input id="pickup-hotel" type="radio" name="name" />
          <label for="pickup-hotel">Hotel</label>
          <input id="pickup-other" type="radio" name="name" />
          <label for="pickup-other">Other</label>
          <input type="text" name="name" placeholder="Where?"/>
        </FormField>
      </FormSection>
      <FormSection id="guest-info">
        <h2>Tourguide</h2>
        <FormField>
          <label for="name">Name: </label>
          <input id="name" type="text" name="contact" />
        </FormField>      
      </FormSection>
      <FormSection id="guest-info">
        <h2>Vehicle</h2>
        <FormField>
          <label for="name">Operator: </label>
          <input id="name" type="text" name="contact" />
          <label for="name">Vehicle: </label>
          <input id="name" type="text" name="contact" />
          <label for="name">Driver: </label>
          <input id="name" type="text" name="contact" />
          <label for="name">Contact: </label>
          <input id="name" type="text" name="contact" />
        </FormField>      
      </FormSection>
      <FormSection id="guest-info">
        <h2>Itinerary</h2>
        <FormField>
          <textarea />
        </FormField>      
      </FormSection>
    </FormStyle>
  </React.Fragment>

)