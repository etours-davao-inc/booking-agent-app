import React, { Component } from 'react';

export const BookingContext = React.createContext();

export class BookingProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "daytour",
      days: ""
    }
  }

  onSelectChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }

  onInputChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  
  render() {
    return (
      <BookingContext.Provider value={{
          data: this.state,
          actions: {
            onSelectChange: this.onSelectChange.bind(this),
            onInputChange: this.onInputChange.bind(this)
          }
        }}>
        {this.props.children}
      </BookingContext.Provider>
    )
  }
}