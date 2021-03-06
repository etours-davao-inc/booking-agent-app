import React from 'react';

import styled from 'styled-components';

import BookingForm from './BookingForm';

import { BookingProvider } from '././BookingForm/context';

const AppStyleWrapper = styled.div`
  @font-face {
    font-family: "Varela" ;
    src: url('https://fonts.googleapis.com/css?family=Varela+Round');
  }
  font-family: 'Varela', sans-serif;
  color: #2f3542;
`

function App() {
  return (

    <AppStyleWrapper>
      <BookingProvider>
        <BookingForm />
      </BookingProvider>
    </AppStyleWrapper>
  );
}

export default App;
