import React, { useContext } from 'react';
import { BookingContext } from '../../context';
import { Grid2 } from '../../Styled';

export default () => {
  const { data, actions } = useContext(BookingContext);

  return (
    <React.Fragment>
      <table class="pure-table" style={{ width: '100%', marginTop: '15px' }}>
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
          </tr>
        </tbody>
      </table>
      <button>Add</button>
    </React.Fragment>
  )
}