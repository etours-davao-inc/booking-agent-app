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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`