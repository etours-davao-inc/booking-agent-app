import styled from 'styled-components';

export const FormField = styled.div`
  display: flex;
  align-items: center;
  input, label {
    color: #2f3542;
  }
  label {
    width: 200px;
  }
  margin-bottom: 10px;
`

export const FormSection = styled.section`
padding: 10px; 
`

export const Grid4 = styled.section`
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 25px;
`

export const Grid5 = styled.section`
  display: inline-grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 25px;
`

export const Grid3 = styled.section`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;
`

export const Grid2 = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`

export const FormStyle = styled.form`

`

export const BookingFormWrapper = styled.div`
  background-color: white;
  width: 1280px;
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1rem;
`

export const FormBodyWrapper = styled.div`
  padding: 0 35px 35px 35px;

  h2 {
    margin: 0 0 35px 0;
  }
`