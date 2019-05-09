import React, { useContext } from 'react';
import { BookingContext } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';

import { FormStyle, FormBodyWrapper } from '../../Styled';

const AddCrewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
`

const FaEdit = (props) => (<FontAwesomeIcon
  icon={faEdit}
  style={{ fontSize: '14px', color: 'rgba(99, 110, 114,1.0)', cursor: 'pointer', margin: '0 5px' }}
  onClick={() => props.openModal()} />)

const FaTrash = (props) => (<FontAwesomeIcon
  icon={faTrashAlt}
  style={{ fontSize: '14px', color: 'rgba(99, 110, 114,1.0)', cursor: 'pointer', margin: '0 5px' }}
  onClick={() => props.openModal()} />)

export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <FormStyle className="pure-form pure-form-stacked">
      <FormBodyWrapper>
        <h4 style={{ margin: '15px 0 0 0' }}>Daily Expenses</h4>
        <table class="pure-table pure-table-bordered" style={{ width: '100%', marginTop: "15px" }}>
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Tourguide</td>
              <td>1500</td>
              <td style={{ textAlign: 'right' }}><FaEdit /><FaTrash /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Van</td>
              <td>4000</td>
              <td style={{ textAlign: 'right' }}><FaEdit /><FaTrash /></td>
            </tr>
          </tbody>
        </table>
        <div style={{ padding: '10px' }}>
          <AddCrewWrapper>
            <div>
              <label htmlFor="name">Item: </label>
              <input id="name" type="text" name="name" />
            </div>
            <div>
              <label htmlFor="contact">Price</label>
              <input id="contact" type="tel" name="contact" />
            </div>
            <fieldset style={{ marginTop: "20px" }}>
              <button class="pure-button">Add</button>
            </fieldset>
          </AddCrewWrapper>
        </div>
      </FormBodyWrapper>
    </FormStyle>
  )
}