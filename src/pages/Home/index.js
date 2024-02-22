import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import WeatherInfo from '../../components/WeatherInfo';
import ForecastList from '../../components/ForecastList';
import {GetHours} from '../../components/utils';

const MainWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:70vw;
  border:1px solid green;
  color:#D0D8E1;
`;

const WeatherContainer = styled.div`
  display:flex;
  border:1px solid red;
  padding:20px 0;
`;

const DivWrapper = styled.div`
width:50%;
padding:30px;
flex-direction:${props => props.col ? 'column' : 'row'};
border:2px dashed white;
//height:100%;
`;

const MainDiv = styled.div`
flex:1;
`;

const ForecastDiv = styled.div`
flex:1;
overflow-x: scroll;
`;

const apiKey = '3ff168bfa880990522fa7a7f16119105';
const newApiKey = 'e464dcb5fb4b878fe957538b7ea003c1';
const unsplashKey = '-ZmJEcvNWBWqMGYLxVIHfDFyoPIQWTKzgPBQg4yPIfo';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imageBG, setImageBG] = useState(null);
  const [forecast, setForecast] = useState([]);

  const getWeatherData = async (position) => {
    try {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      setIsLoading(true);
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );

      const imageData = await axios(
        `https://api.unsplash.com/photos/random?query=${data.weather.icon}&client_id=${unsplashKey}`
      );

      const { data: forecastData } = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${newApiKey}&units=metric`
      );

      const list = forecastData.list;

      const item = list.map((i) => {
        return {
          hours: GetHours(i.dt_txt),
          weatherIcon: i.weather[0].icon,
          temperature: i.main.temp,
          id: `${Math.random()}-${Math.random()}`,
        };
      });

      const updatedForecastList = [...forecast, ...item];

      if (
        !data ||
        !data.name ||
        !data.sys.country ||
        !imageData ||
        !forecastData
      )
        return;

      setWeatherData(data);
      setImageBG(imageData.data.urls.regular);
      setForecast(updatedForecastList);
      setIsLoading(false);
    } catch (err) {
      setError(error);
      setIsLoading(false);
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherData(position);
    });
  };

  useEffect(() => {
    getLocation();
    setIsLoading(true);
  }, []);

  return (
    <MainWrapper>
      <Heading />
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {weatherData && forecast && (
        <WeatherContainer>
          <DivWrapper>
            <MainDiv>
              <Main weatherData={weatherData} imageBG={imageBG} />
            </MainDiv>
            <ForecastDiv>
              <ForecastList forecast={forecast} />
            </ForecastDiv>
          </DivWrapper>
          <DivWrapper>
            <WeatherInfo weatherData={weatherData} />
          </DivWrapper>
        </WeatherContainer>
      )}
    </MainWrapper>
  );
};

export default Home;
