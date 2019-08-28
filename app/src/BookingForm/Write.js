import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
  return (
    <FontAwesomeIcon 
    icon={faPen} 
    style={{fontSize: '14px', color: 'rgba(99, 110, 114,1.0)', cursor:'pointer'}} 
    onClick={() => props.openModal() }/>
  )
}