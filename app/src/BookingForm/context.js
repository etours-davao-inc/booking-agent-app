import React, { Component } from 'react';
import { getDays } from 'tour-dates-utility';

import { Calculate } from 'price-compute-js';

export const BookingContext = React.createContext();

export class BookingProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
      module: "",
      type: "daytour",
      days: 0,
      userInput: {
        inquiryDate: new Date(),
        adults: [0, 0],
        kid02: [0, 0],
        kid35: [0, 0],
        kid611: [0, 0],
        name: "",
        email: "",
        contact: "",
        remarks: ""        
      },
      calculations: {
        item: {
          adults: 0,
          kid02: 0,
          kid35: 0,
          kid611: 0
        },
        total: {
          adults: 0,
          kid02: 0,
          kid35: 0,
          kid611: 0,
          total: 0,
          downpayment: 0,
          balance: 0  
        }
      },
      activities: {}
    }
  }

  activity() {
    return {
      from: "",
      to:"",
      pickUp: "",
      dropOff: "",
      details: "hello"
    }
  }

  componentDidMount() {
    let days = this.assignDayValue(this.state.type)
    let activities = {}
    const tourDate = Date.now()
    if (this.state.type === "daytour") {
      activities[0] = {
        from: "",
        to:"",
        pickUp: "",
        dropOff: "",
        details: "hello"        
      }
    }
    this.setState({days: days, activities: activities, tourDate: tourDate})
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

  onUserInputChange(e) {
    let userInput = this.state.userInput;
    userInput[e.target.name] = e.target.value;
    this.setState({userInput:userInput})
  }

  onDateChange(date) {
    this.setState({tourDate: date})
  }

  onDatesChange(day, type) {
    let from = this.state.from
    let to = this.state.to
    let days, returnValue;
    let isWithinAcceptableDays;
    if (type === 'from' && !isNaN(to)) {
      days = getDays(day, to)
      isWithinAcceptableDays = days >= 2 && days <= 30
      if (isWithinAcceptableDays) {
        returnValue = { from: day, days: days }
      } else {
        returnValue = { [type]: day, days: 0 }
      }
    } else if (type === 'to' && !isNaN(from)) {
      days = getDays(from, day)
      isWithinAcceptableDays = days >= 2 && days <= 30
      if (isWithinAcceptableDays) {
        returnValue = {to: day, days: days}
      } else {
        returnValue = { [type]: day, days: 0 }
      }
    } else {
      returnValue = { [type]: day, days: 0 }
    }  
    returnValue = this.setActivities(returnValue)
    this.setState(returnValue)
  }

  setActivities(arg) {
    let activities = {}
    for (let i = 0; i < arg.days; i++) {
      activities[i] = {
        from: "",
        to:"",
        pickUp: "",
        dropOff: "",
        details: "hello"
      }
    }
    arg['activities'] = activities;
    return arg
  }
  
  openModal(component) {
    console.log("I was opened")
    console.log(component)
    this.setState({openModal:true, module: component})
  }

  closeModal() {
    console.log("I was closed")
    this.setState({openModal:false})
  }

  onPaxChange(e) {
    let input = this.state.userInput
    input[e.target.name][0] = parseInt(e.target.value)
    let calculations = Calculate(input)
    this.setState({userInput:input, calculations:calculations})
  }

  onPriceChange(e) {
    let input = this.state.userInput
    input[e.target.name][1] = parseFloat(e.target.value)
    let calculations = Calculate(input)
    this.setState({userInput:input, calculations:calculations})
  }

  updateItinerary(day, itinerary) {
    let activities = this.state.activities;
    activities[day] = itinerary
    console.log(activities)
    this.setState({ activities:activities })
  }

  render() {
    return (
      <BookingContext.Provider value={{
          data: this.state,
          actions: {
            onSelectChange: this.onSelectChange.bind(this),
            onUserInputChange: this.onUserInputChange.bind(this),
            openModal: this.openModal.bind(this),
            closeModal: this.closeModal.bind(this),
            onDatesChange: this.onDatesChange.bind(this),
            onPaxChange: this.onPaxChange.bind(this),
            onPriceChange: this.onPriceChange.bind(this),
            updateItinerary: this.updateItinerary.bind(this)
          }
        }}>
        {this.props.children}
      </BookingContext.Provider>
    )
  }
}