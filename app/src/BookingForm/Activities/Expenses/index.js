import React, { useContext } from 'react';
import { BookingContext } from '../../context';

export default () => {
  const { data, actions } = useContext(BookingContext);

  return (
    <React.Fragment>
      <p>Expenses <small><a href="#" onClick={console.log('im clicked')}>Add/Edit</a></small></p>
      <div style={{ padding: '5px', border: '1px solid #3c6382', fontSize:'14px' }}>
        <p>Crocodile park - P100 </p>
        <p>Crocodile park - P100</p>
        <p>Crocodile park - P100</p>
        <p>Crocodile park - P100</p>
        <p>Total - P400</p>
      </div>
    </React.Fragment>
  )
}