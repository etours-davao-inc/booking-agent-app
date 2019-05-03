import React, { Component } from 'react';
import Portal from './Portal';

import styled from 'styled-components';

const MobileButton = styled.button`
  background-color: #2ecc71;
  color: white;
  height: 45px;
  font-size: 18px;
  width: 100%;
  border: none;
`

const ModalWrapper = styled.div`
  background-color: rgba(45, 52, 54,.7);
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
`

const ModalBodyWrapper = styled.div`
  background-color: white;
  width: 1200px;
  height: 850px;
  z-index: 999;
  box-sizing: border-box;
  border: 1px solid gray;
  margin: 15px auto;
  border-radius: 2px;
`

export default (props) => {
  if (props.display) {
    document.body.style.overflow = "hidden";
    return (
      <Portal>
        <ModalWrapper>
          <ModalBodyWrapper>
            <div id="modalBody">
              <span id="closePortalBtn" onClick={() => props.closeModal()}>close [x]</span>
              {props.children}
            </div>
          </ModalBodyWrapper>
        </ModalWrapper>
      </Portal>
    )
  } else {
    document.body.style.overflow = "visible";
    return null
  }
}

