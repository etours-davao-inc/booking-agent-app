import React, { Component } from 'react';
import { getDays } from 'tour-dates-utility';

export const BookingContext = React.createContext();

export class BookingProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
      module: "",
      type: "daytour",
      days: 0
    }
  }

  componentDidMount() {
    let days = this.assignDayValue(this.state.type)
    this.setState({days: days})
  }

  assignDayValue(type) {
    if (type === "daytour") {
      return 1
    } else {
      return 0
    }
  }

  onSelectChange(e) {
    let days = this.assignDayValue(e.target.value)
    this.setState({[e.target.name]:e.target.value, days: days})
  }

  onInputChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }

  onDatesChange(day, type) {
    let from = this.state.from
    let to = this.state.to
    let days;
    let isWithinAcceptableDays;
    if (type === 'from' && !isNaN(to)) {
      days = getDays(day, to)
      isWithinAcceptableDays = days >= 2 && days <= 30
      if (isWithinAcceptableDays) {
        this.setState({from: day, days: days})
      } else {
        this.setState({[type]: day, days: 0 })
      }
    } else if (type === 'to' && !isNaN(from)) {
      days = getDays(from, day)
      isWithinAcceptableDays = days >= 2 && days <= 30
      if (isWithinAcceptableDays) {
        this.setState({to: day, days: days})
      } else {
        this.setState({[type]: day, days: 0 })
      }
    } else {
      this.setState({[type]: day, days: 0 })
    }  
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
            onDatesChange: this.onDatesChange.bind(this)
          }
        }}>
        {this.props.children}
      </BookingContext.Provider>
    )
  }
}