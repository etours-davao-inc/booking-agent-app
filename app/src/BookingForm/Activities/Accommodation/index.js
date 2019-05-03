import React, { useContext } from 'react';
import { BookingContext } from '../../context';

export default () => {
  const { data, actions } = useContext(BookingContext);

  return (
    <React.Fragment>
      <div>
        <p>Accommodation <small><a href="#" onClick={console.log('im clicked')}>Add Accommodation</a></small></p>
        <div style={{ padding: '5px', border: '1px solid #3c6382', fontSize:'14px' }}>
          <p>Hotel: Marco Polo Hotel</p>
          <p>Type: Etours Account </p>
          <p>Reservation num: 12345 </p>
          <a href="#">Delete</a>
        </div>
      </div>
    </React.Fragment>
  )
}