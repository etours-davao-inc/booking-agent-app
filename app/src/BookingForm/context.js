import React, { Component } from 'react';

export const BookingContext = React.createContext();

export class BookingProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "daytour"
    }
  }

  onSelectChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  
  render() {
    return (
      <BookingContext.Provider value={{
          data: this.state,
          actions: {
            onSelectChange: this.onSelectChange.bind(this)
          }
        }}>
        {this.props.children}
      </BookingContext.Provider>
    )
  }
}