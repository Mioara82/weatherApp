import React from 'react';
//import { Card } from 'flowbite-react';
import {  WeatherIcon, NumberCont, ForecastLi } from '../Styled';

const ForecastItem = ({ item }) => {
  const iconCode = item.weatherIcon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;
  return (
    <ForecastLi>
      <NumberCont small>{item.hours}</NumberCont>
      <hr></hr>
      {iconCode && <WeatherIcon src={iconURL} alt="weather icon"></WeatherIcon>}
      <NumberCont small>{item.temperature.toFixed(0)} °C</NumberCont>
    </ForecastLi>
  );
};

export default ForecastItem;
