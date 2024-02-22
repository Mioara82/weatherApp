import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWind,
  faCloud,
  faDroplet,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

const InfoContainer = styled.div`
 display:flex;
 flex-direction:column;
 flex-wrap:wrap;
 align-content:space-between;
 flex:1;
 padding:20px;
 margin:0 20px;
 gap:16px;
 background-image: linear-gradient(to right top, #0e1116, #14171b, #181c20, #1d2126, #21262b);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
transition: all 2s ease-in;
border-radius:12px;
`;

const InfoItem = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
padding:10px 30px;
margin-bottom:10px;
border:1px solid rgba(0, 0, 0, 0.61);
border-radius:12px;
background-color: rgba(0, 0, 0, 0.61);
backdrop-filter: blur(5px);
`;

const Title = styled.h3`
flex:1;
color:white;
font-size:14px;
flex:1;
`;

const NumberCont = styled.span`
font-family: "xenera", sans-serif;
font-weight: 400;
font-style: normal;
font-size:12px;
margin-left:auto;
`;

const FontCont = styled.div`
  display:flex;
  margin-right:auto;
`;

const MiddleCont = styled.div`
display:flex;
align-items:center;
`;

const Paragraph = styled.p`
  font-size:8px;
  margin:0;
`;

const WeatherInfo = ({ weatherData }) => {
  return (
    <div>
      <InfoContainer>
        <InfoItem>
          <FontCont>
            <FontAwesomeIcon icon={faEye} />
          </FontCont>
          <MiddleCont >
            <Title>
              Visibility{' '}
            </Title>
            <NumberCont>
              {weatherData.visibility} m
            </NumberCont>
          </MiddleCont>
          <Paragraph>
            The air quality is generally acceptable for most individuals.
            However, sensitive groups may experience minor to moderate symptoms
            from long-term exposure.
          </Paragraph>
        </InfoItem>
        <InfoItem>
          <FontCont>
            <FontAwesomeIcon icon={faCloud} />
          </FontCont>
          <MiddleCont>
            <Title>
              Clouds
            </Title>
            <NumberCont>
              {weatherData.clouds?.all} %
            </NumberCont>
          </MiddleCont>
          <Paragraph>
            The air quality is generally acceptable for most individuals.
            However, sensitive groups may experience minor to moderate symptoms
            from long-term exposure.
          </Paragraph>
        </InfoItem>
        <InfoItem>
          <FontCont>
            <FontAwesomeIcon icon={faDroplet} />
          </FontCont>
          <MiddleCont>
            <Title>
              Humidity
            </Title>
            <NumberCont>
              {weatherData.main?.humidity} %
            </NumberCont>
          </MiddleCont>
          <Paragraph>
            The air quality is generally acceptable for most individuals.
            However, sensitive groups may experience minor to moderate symptoms
            from long-term exposure.
          </Paragraph>
        </InfoItem>
        <InfoItem>
          <FontCont>
            <FontAwesomeIcon icon={faWind} />
          </FontCont>
          <MiddleCont>
            <Title>
              Wind{' '}
            </Title>
            <NumberCont>
              {weatherData.wind?.gust} m/s
            </NumberCont>
          </MiddleCont>
          <Paragraph>
            The air quality is generally acceptable for most individuals.
            However, sensitive groups may experience minor to moderate symptoms
            from long-term exposure.
          </Paragraph>
        </InfoItem>
      </InfoContainer>
    </div>
  );
};

export default WeatherInfo;
