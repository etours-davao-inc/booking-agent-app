import React, { useContext, useState } from 'react';
import { BookingContext } from '../context';
import { Grid2 } from '../Styled';

import styled from 'styled-components';

import Modal from '../Modal';

import Itinerary from './Itinerary';

import Write from '../Write';

export default ({ day }) => {
  const { data, actions } = useContext(BookingContext);
  return (
    <ActivityWrapper>
      <h2>{data.type == "daytour" ? data.tourDate : `Day ${day + 1}` }</h2>
      <Itinerary day={day} />
      <section>
        <h3>Transportation <Write openModal={() => actions.openModal('transportation')} /></h3>
        <Grid2>
          <div style={{ padding: '5px', border: '1px dashed rgba(60, 99, 130,.30)', borderRadius: '2px', fontSize: '14px' }}>
            <h4>Van - LXC 201</h4>
            <p>Operator: Holiday </p>
            <p>Driver: Tom - 09177011882</p>
            <p>Tourguide: Mik - 09177011882</p>
          </div>
        </Grid2>
      </section>
      <section>
        <h3>Accommodation <Write openModal={() => actions.openModal('accommodation')} /></h3>
        <Grid2>
          <div style={{ padding: '5px', border: '1px dashed rgba(60, 99, 130,.30)', borderRadius: '2px', fontSize: '14px' }}>
            <h4>Marco Polo Hotel</h4>
            <p>Reservation number: 12345 on Etours Account</p>

          </div>
        </Grid2>
      </section>
      <section>
        <h3>Expenses <Write openModal={() => actions.openModal('expenses')} /></h3>
        <ul style={{ padding: '5px', border: '1px dashed rgba(60, 99, 130,.30)', borderRadius: '2px', fontSize: '14px' }}>
          <li>Crocodile park - P100 </li>
          <li>Crocodile park - P100</li>
          <li>Crocodile park - P100</li>
          <li>Crocodile park - P100</li>
          <li><strong>Total - P400</strong></li>
        </ul>
      </section>
      <Modal display={data.openModal} closeModal={() => actions.closeModal(false)}>
        {data.module}
      </Modal>
    </ActivityWrapper>
  )
}

const ActivityWrapper = styled.div`
  padding: 15px;
  border: 1px solid #3c6382;
  font-size: 14px;
  border-radius: 2px;

  p {
    padding: 0px;
    margin: 2px;
  }

  section {
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 5px; 
    margin: 0;
  }

  li {
    padding: 2px;
  }

  h4 {
    margin: 3px 0;
  }

  h2 {
    margin: 0 0 15px 0;
  }

  h3 {
    margin: 8px 0;
  }
`