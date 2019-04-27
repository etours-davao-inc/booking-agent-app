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
    
    <FormStyle className="pure-form">
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
          <label htmlFor="contact">Contact No: </label>
          <input id="contact" type="text" name="contact" size={60} />
        </FormField>
        <FormField>
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" name="email" size={60} />
        </FormField>
      </FormSection>
      <FormSection>
        <h2>Guest Information</h2>
        <FormField>
          <label htmlFor="adults">Number of Adults: </label>
          <input id="adults" type="text" name="adults" size={3} />
        </FormField>
        <FormField>
          <label htmlFor="kid02">Number of kids(0-2): </label>
          <input id="kid02" type="text" name="kid02" size={3} />
          </FormField>
        <FormField>  
          <label htmlFor="kid35">Number of kids(3-5): </label>
          <input id="kid35" type="text" name="kid35" size={3} />
          </FormField>
        <FormField>
          <label htmlFor="kid611">Number of kids 6-11: </label>
          <input id="kid611" type="text" name="kid611" size={3} />
        </FormField>
        <FormField>
          <label htmlFor="">Arrival Date: </label>
          <fieldset className="pure-group">
            <input id="from" type="text" name="from" />
            <input id="from_flight_no" type="text" name="from_flight_no" placeholder="Flight Number"/>
          </fieldset>
        </FormField>
        <FormField>
          <label htmlFor="">Departurn Date: </label>
          <fieldset className="pure-group">
            <input id="to" type="text" name="to" />
            <input id="to_flight_no" type="text" name="to_flight_no" placeholder="Flight Number"/>
          </fieldset>
        </FormField>
        <FormField>
          <label htmlFor="">Tour Date: </label>
          <fieldset className="pure-group">
            <input id="tourdate" type="text" name="tourdate" />
            <input id="from" type="text" name="from" placeholder="Start time"/>
            <input id="to" type="text" name="to" placeholder="End time"/>
          </fieldset>
        </FormField>        
      </FormSection>
      <FormSection>
        <h2>Accommmodation Info</h2>
        <FormField>
          <label htmlFor="hotel">Hotel: </label>
          <input id="hotel" type="text" name="hotel" size={50} />
        </FormField>
        <FormField>
          <label htmlFor="hotel_reservation_number">Reservation number</label>
          <input id="hotel_reservation_number" type="text" name="hotel_reservation_number"/>
        </FormField>
        <FormField>
          <label htmlFor="hotel_room_number">Room number </label>
          <input id="hotel_room_number" type="text" name="hotel_room_number" size={5} />
        </FormField>
        <FormField>  
          <label htmlFor="">Reservation Type</label>
          <select id="booking-type">
            <option>Etours Account</option>
            <option>Guest Account</option>
          </select>
        </FormField>      
      </FormSection>
      <FormSection>
        <h2>Airport Pickup</h2>
        <FormField>
          <label htmlFor="with_airport_pickup">With Airport Pickup</label>
          <input type="checkbox" name="with_airport_pickup" checked />
        </FormField>
      </FormSection>
      <FormSection>
        <h2>Tourguide</h2>
        <select id="tourguide">
          <option>Sam</option>
          <option>Jojo</option>
          <option>Milber</option>
          <option>Shagay</option>
        </select>    
      </FormSection>
      <FormSection>
        <h2>Vehicle</h2>
        <FormField>
          <label htmlFor="vehicle_operator">Operator: </label>
          <input id="vehicle_operator" type="text" name="vehicle_operator" />
        </FormField>
        <FormField>    
          <label htmlFor="">Vehicle: </label>
          <fieldset className="pure-group">
            <input id="vehicle_operator" type="text" name="vehicle_operator" placeholder="Type"/>
            <input id="vehicle_plate_no" type="text" name="vehicle_plate_no" placeholder="Plate Number"/>
          </fieldset>
        </FormField>
        <FormField>    
          <label htmlFor="">Driver: </label>
          <fieldset className="pure-group">
            <input id="vehicle_driver" type="text" name="vehicle_driver" placeholder="Name"/>
            <input id="vehicle_contact" type="text" name="vehicle_contact" placeholder="Contact"/>
          </fieldset>
        </FormField>     
      </FormSection>
      <FormSection>
        <h2>Itinerary</h2>
        <FormField>
          <ItineraryEditor />
        </FormField>      
      </FormSection>
    </FormStyle>
  </React.Fragment>

)