import React, { useState, useEffect } from 'react';
//import axios from "axios";
import {
  CurrentLocationCont,
  FlagCont,
  LocationTextCont,
  Span,
  Img,
  LocationHeader,
} from '../Styled.js';

const Current = ({current}) => {

   const flag = `https://flagsapi.com/${current.sys.country}/shiny/64.png`;

  return (
    <div>
         <CurrentLocationCont>
          <FlagCont>
            <Img src={flag} alt="flag" />
          </FlagCont>
          <LocationTextCont>
            <Span>Current Location</Span>
            <LocationHeader>
              {current.name} <Span italic big>{current.sys.country}</Span>
            </LocationHeader>
          </LocationTextCont>
        </CurrentLocationCont> 
    </div>
  );
};

export default Current;
