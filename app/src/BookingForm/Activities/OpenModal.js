import React from 'react';
import Itinerary from './Itinerary';
import Transportation from './Transportation';
import Accommodation from './Accommodation';
import Expenses from './Expenses';

export default (props) => {
  switch(props.module) {
    case 'itinerary':
      return <Itinerary />
    case 'transportation':
      return <Transportation />
    case 'accommodation':
      return <Accommodation />
    case 'expenses':
      return <Expenses />
    default:
      return null        
  }
}