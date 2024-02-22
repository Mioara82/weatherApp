import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import WeatherInfo from '../../components/WeatherInfo';
import ForecastList from '../../components/ForecastList';
import {GetHours} from '../../components/utils';

const MainWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:70vw;
  border:1px solid white;
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
`

const City = () => {
    const {cityId} = useParams();
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [imageBG, setImageBG] = useState(null);
    const [forecast, setForecast] = useState([]);

    const getWeatherData = async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
    
          setIsLoading(true);
          const { data : cityData} = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid={${apiKey}&units=metric}`);

          console.log('cityData from api', cityData);
    
          const imageData = await axios(
            `https://api.unsplash.com/photos/random?query=${data.location.city}&client_id=${unsplashKey}`
          );

          console.log('image data for city location', imageData)
    
          const { data: forecastData } = await axios(
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityId}&appid=${newApiKey}&units=metric`
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
    
          console.log('item is', item);
    
          const updatedForecastList = [...forecast, ...item];
          console.log('updated forecast list', updatedForecastList);
    
          if (
            !cityData ||
            !imageData ||
            !forecastData
          )
            return;
    
          setWeatherData(cityData);
          setImageBG(imageData.data.urls.regular);
          setForecast(updatedForecastList);
          console.log('setState forecast', forecast);
          setIsLoading(false);
        } catch (err) {
          setError(error);
          setIsLoading(false);
        }
      };
    
      const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          getWeatherData(position);
          console.log('forecast for city state after update', forecast);
        });
      };
    
      useEffect(() => {
        getLocation();
        console.log('updated forecast for city', forecast);
        setIsLoading(true);
      }, [cityId]);
    
      return (
        <MainWrapper>
          <Heading />
          {isLoading && <div>Loading</div>}
          {error && <div>{error}</div>}
          {weatherData && forecast && (
            <WeatherContainer>
              <DivWrapper>
                <DivWrapper col>
                  <Main weatherData={weatherData} imageBG={imageBG} />
                </DivWrapper>
                <DivWrapper col>
                  <ForecastList forecast={forecast} />
                </DivWrapper>
              </DivWrapper>
              <DivWrapper>
                <WeatherInfo weatherData={weatherData} />
              </DivWrapper>
            </WeatherContainer>
          )}
           <Link to="/cityId">Go to Other Route</Link>
        </MainWrapper>
      );
    };
    
    export default City;
