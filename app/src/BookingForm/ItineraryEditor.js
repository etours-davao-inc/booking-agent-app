import React from 'react';
import RichTextEditor from 'react-rte';
import styled from 'styled-components';

const EditorStyleWrapper = styled.span`
  .RichTextEditor__root___2QXK- {
    min-width: 960px;
    min-height: 800px;
  }
`

export default class ItineraryEditor extends React.Component {
  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {
    return (
      <EditorStyleWrapper>
        <RichTextEditor value={this.state.value} onChange={this.onChange} />
      </EditorStyleWrapper>
    );
  }
}