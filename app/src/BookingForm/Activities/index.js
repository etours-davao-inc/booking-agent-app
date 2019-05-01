import React, { useContext } from 'react';
import { BookingContext } from '../context';

import Activity from './Activity';

import styled from 'styled-components';

const ActivitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`

export default () => {
  const { data, actions } = useContext(BookingContext);
  var activities = [];
  for (let i = 0; i < data.days; i++) {
    activities.push(<Activity day={i} />)
  }
  return (
    <ActivitiesWrapper>
      {activities}
    </ActivitiesWrapper>
  )
}