import React, { useContext } from 'react';
import RTEditor from './RTEditor';
import styled from 'styled-components';
import TimeLoc from './TimeLoc';

import { FormStyle, FormBodyWrapper } from '../../Styled';

import { BookingContext } from '../../context';

const EditorStyleWrapper = styled.div`
  .RichTextEditor__root___2QXK- {
    min-height: 400px;
    margin-bottom: 25px;
  }
`
export default () => {
  const { data, actions } = useContext(BookingContext);
  return (
    <FormStyle className="pure-form pure-form-stacked">
      <FormBodyWrapper>
        <h2>Itinerary Editor</h2>
        <TimeLoc />
        <EditorStyleWrapper>
          <RTEditor />
        </EditorStyleWrapper>
        <fieldset style={{ textAlign: 'right' }}>
          <button class="pure-button" onClick={() => actions.closeModal(false)}>Cancel</button>
          <button type="submit" class="pure-button pure-button-primary">Update</button>
        </fieldset>
      </FormBodyWrapper>
    </FormStyle>
  );
}
