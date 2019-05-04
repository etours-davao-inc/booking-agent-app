import React, { Component } from 'react';

export const BookingContext = React.createContext();

export class BookingProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
      module: "",
      type: "daytour",
      days: 1
    }
  }

  onSelectChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }

  onInputChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  
  openModal(mod) {
    console.log("I was opened")
    this.setState({openModal:true, module: mod})
  }

  closeModal() {
    console.log("I was closed")
    this.setState({openModal:false})
  }

  render() {
    return (
      <BookingContext.Provider value={{
          data: this.state,
          actions: {
            onSelectChange: this.onSelectChange.bind(this),
            onInputChange: this.onInputChange.bind(this),
            openModal: this.openModal.bind(this),
            closeModal: this.closeModal.bind(this),
          }
        }}>
        {this.props.children}
      </BookingContext.Provider>
    )
  }
}