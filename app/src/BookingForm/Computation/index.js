import React, { useContext } from 'react';
import Currency from 'react-currency-formatter';

import styled from 'styled-components';

import { BookingContext } from '../context';

const ComputationWrapper = styled.section`
  padding: 15px;
  border: 1px solid #3c6382;
  font-size: 14px;
  border-radius: 2px;

  #summary_wrapper {
    width: 90%;
    margin-top: 15px;
  }

  h2 {
    margin: 0;
  }

  .computationGrid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 10px;
    border-bottom: 1px dashed rgba(60, 99, 130, 0.3);
  }

  .computationGrid p {
    padding: 2px;
    margin: 10px;
  }

  .computationGrid p:nth-child(3) {
    text-align: center;
  }

  .computationGrid p:nth-child(2), 
  .computationGrid p:nth-child(4) {
    text-align: right;
  }

  .computationTotalBalance {
    grid-column-start: 1;
    grid-column-end: 4;
  }    
`

export default () => {
  const { data, actions } = useContext(BookingContext);
  const userInput = data.userInput;
  const calculations = data.calculations;
  return (
    <ComputationWrapper>
      <h2>Computation Summary</h2>
      <div id="summary_wrapper">
        <div className="computationGrid">
          <p></p><p>Price</p><p>Qty</p><p></p>
        </div>
        <div className="computationGrid">
          <p>Adults</p>
          <p><Currency quantity={calculations.item.adults} currency="PHP" pattern="!##,### " /></p>
          <p>{userInput.adults[0]}</p>
          <p><Currency quantity={calculations.total.adults} currency="PHP" pattern="!##,### " /></p>
        </div>
        <div className="computationGrid">
          <p>Kids (0-2 yrs)</p>
          <p><Currency quantity={calculations.item.kid02} currency="PHP" pattern="!##,### " /></p>
          <p>{userInput.kid02[0]}</p>
          <p><Currency quantity={calculations.total.kid02} currency="PHP" pattern="!##,### " /></p>
        </div>
        <div className="computationGrid">
          <p>Kids (3-5 yrs)</p>
          <p><Currency quantity={calculations.item.kid35} currency="PHP" pattern="!##,### " /></p>
          <p>{userInput.kid35[0]}</p>
          <p><Currency quantity={calculations.total.kid35} currency="PHP" pattern="!##,### " /></p>
        </div>
        <div className="computationGrid">
          <p>Kids (6-11 yrs)</p>
          <p><Currency quantity={calculations.item.kid611} currency="PHP" pattern="!##,### " /></p>
          <p>{userInput.kid611[0]}</p>
          <p><Currency quantity={calculations.total.kid611} currency="PHP" pattern="!##,### " /></p>
        </div>
        <div className="computationGrid">
          <p className="computationTotalBalance">Total</p>
          <p><Currency quantity={calculations.total.total} currency="PHP" pattern="!##,### " /></p>
        </div>
        <div className="computationGrid">
          <p className="computationTotalBalance">Required downpayment to confirm your reservation</p>
          <p><Currency quantity={calculations.total.downpayment} currency="PHP" pattern="!##,### " /></p>
        </div>
        <div className="computationGrid">
          <p className="computationTotalBalance">Balance to be paid on the first day of your tour</p>
          <p><Currency quantity={calculations.total.balance} currency="PHP" pattern="!##,### " /></p>
        </div>
      </div>
    </ComputationWrapper>
  )
}