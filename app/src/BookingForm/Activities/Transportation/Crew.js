import React, { useContext } from 'react';
import { BookingContext } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';

const AddCrewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
`

const FaEdit = (props) => (<FontAwesomeIcon
  icon={faEdit}
  style={{ fontSize: '14px', color: 'rgba(99, 110, 114,1.0)', cursor: 'pointer', margin:'0 5px' }}
  onClick={() => props.openModal()} />)

const FaTrash = (props) => (<FontAwesomeIcon
  icon={faTrashAlt}
  style={{ fontSize: '14px', color: 'rgba(99, 110, 114,1.0)', cursor: 'pointer', margin:'0 5px' }}
  onClick={() => props.openModal()} />)

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <div>
      <h4 style={{ margin: '15px 0 0 0' }}>Crew</h4>
      <table class="pure-table pure-table-bordered" style={{ width: '100%', marginTop: "15px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Contact</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jojo</td>
            <td>Tourguide</td>
            <td>09187011882</td>
            <td style={{textAlign:'right'}}><FaEdit /><FaTrash/></td>
          </tr>
          <tr>
            <td>Pedro</td>
            <td>Drive</td>
            <td>09187011882</td>
            <td style={{textAlign:'right'}}><FaEdit /><FaTrash/></td>
          </tr>
        </tbody>
      </table>
      <div style={{ padding: '10px' }}>
        <AddCrewWrapper>
          <div>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" name="name" />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <select id="role">
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
          <fieldset style={{ marginTop: "20px" }}>
            <button class="pure-button">Add</button>
          </fieldset>
        </AddCrewWrapper>
      </div>
    </div>
  )
}