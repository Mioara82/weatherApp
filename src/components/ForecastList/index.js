import React from 'react';
import ForecastItem from '../ForecastItem';
import styled, { css } from 'styled-components';

export const UnorderedList = styled.ul`
  list-style:none;
  display:flex;
  flex-direction:${props => props.col ? 'column' : 'row'};
  gap:20px;
  padding:20px 0;
  margin:0;
  `;

const ForecastList = ({forecast}) => {
  return (
    <UnorderedList>
      {forecast.map((item) => {
        return (
          <ForecastItem 
          key={item.id}
          item={item}
          />
        )
      })}
    </UnorderedList>
  )
}

export default ForecastList;
