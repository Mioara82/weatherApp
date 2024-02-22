import React from 'react';
import styled from 'styled-components';

import { CurrentDateInfo } from '../utils';

const Title = styled.h3`
flex:1;
color:white;
font-size:${(props) => (props.small ? '10px' : '32px')};
width:${(props) => (props.percentage ? '50%' : '')};
flex:${(props) => (props.flex ? '1' : '')};
`;

 const Text = styled.h5`
flex:1;
margin:0;
`;

const LocationContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
border-radius:12px;
padding:20px;
color:white;
flex:1;
`;

 const DataContainer = styled.div`
display:flex;
justify-content:center;
margin-bottom:20px;
gap:12px;
`;

 const SecondaryInfo = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
`;

const WeatherIcon = styled.img`
  width:60px;
  height:60px;
  margin:auto;
`;

const NumberCont = styled.span`
font-family: "xenera", sans-serif;
font-weight: 400;
font-style: normal;
font-size:${(props) => (props.small ? '14px' : '26px')};
margin:auto;
width:${(props) => (props.percentage ? '30%' : '')};
text-align:${(props) => (props.right ? 'right' : '')};
`;

const Main = ({ weatherData, imageBG }) => {
  const iconCode = weatherData.weather?.icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;
 
  return (
    <div>
      <LocationContainer style={{backgroundImage:`url(${imageBG})`, backgroundSize:'cover'}}>
        <DataContainer>
          <NumberCont>
            <CurrentDateInfo />
          </NumberCont>
          <hr style={{ opacity: '0.4' }}></hr>
        </DataContainer>
        <DataContainer>
          <Title>{weatherData.name}</Title>
          <Title>
            <NumberCont>{weatherData.main?.temp.toFixed(0)}°C</NumberCont>
          </Title>
          {iconCode && <WeatherIcon src={iconURL}></WeatherIcon>}
        </DataContainer>
        <SecondaryInfo>
          <Title small>
            Feels like:{' '}
            <NumberCont small>{weatherData.main?.feels_like.toFixed(0)}°C</NumberCont>
          </Title>
          <Title small>
            Sunrise:{' '}
            <NumberCont small>
              {new Date(weatherData.sys?.sunrise * 1000).toLocaleTimeString(
                'en'
              )}
            </NumberCont>
          </Title>
          <Title small>
            Sunset:{' '}
            <NumberCont small>
              {new Date(weatherData.sys?.sunset * 1000).toLocaleTimeString(
                'en'
              )}
            </NumberCont>
          </Title>
        </SecondaryInfo>
      </LocationContainer>
    </div>
  );
};

export default Main;
