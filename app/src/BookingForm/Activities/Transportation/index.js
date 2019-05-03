import React, { useContext } from 'react';
import { BookingContext } from '../../context';
import { Grid2 } from '../../Styled';

export default () => {
  const { data, actions } = useContext(BookingContext);

  return (
    <React.Fragment>
      <div>
        <p>Transportation <small><a href="#" onClick={console.log('im clicked')}>Add Transportation</a></small></p>
        <Grid2>
          <div style={{ padding: '5px', border: '1px solid #3c6382', fontSize:'14px' }}>
            <p>Type: Van</p>
            <p>Identifier: LXC 201 </p>
            <p>Operator: Holiday </p>
            <p>Crew:</p>
            <ul>
              <li>Driver: Tom - 09177011882</li>
              <li>Tourguide: Mik - 09177011882</li>
            </ul>
            <a href="#">Delete</a>
          </div>
        </Grid2>
      </div>
    </React.Fragment>
  )
}