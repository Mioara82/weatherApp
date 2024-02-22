import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cities from '../CitiesList';
import Current from '../Current';
import { HandleDegreeChange } from '../utils';
import { NavWrapper, Logo, InputWrapper, Button } from '../Styled';

const apiKey = '3ff168bfa880990522fa7a7f16119105';
const newApiKey = 'e464dcb5fb4b878fe957538b7ea003c1';

const Navigation = () => {
  const [cities, setCities] = useState([]);
  const [current, setCurrent] = useState(null);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorCurrent, setErrorCurrent] = useState(false);
  const [isLoadingCurrent, setIsLoadingCurrent] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const duplicateCity = (value) => {
      return cities.some(
        (city) => city.name.toLowerCase() === value.toLowerCase()
      );
    };
    if (duplicateCity(value)) {
      setValue('');
      setIsLoading(false);
      return;
    }
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apiKey}`
      );

      const item = {
        name: data.name,
        country: data.sys.country,
        temp: data.main.temp.toFixed(0),
        id: `${Math.random()}-${Math.random()}`,
      };
      setCities([...cities, item]);
      setIsLoading(false);
      setValue('');
    } catch (error) {
      setIsLoading(false);
      setError(error);
      setTimeout(() => {
        setError();
      }, 5000);
    }
  };

  const getCurrent = async (position) => {
    try {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      setIsLoadingCurrent(true);
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${newApiKey}`
      );
      if (!data || !data.name || !data.sys.country) return;

      setCurrent(data);
      setIsLoadingCurrent(false);
    } catch (err) {
      setErrorCurrent(error);
      setIsLoadingCurrent(false);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getCurrent(position);
    });
  };

  useEffect(() => {
    getCurrentLocation();
    setIsLoadingCurrent(true);
  }, []);

  const handleRemove = (item) => {
    const newCities = cities.filter((city) => city.id !== item.id);
    setCities(newCities);
  };

  return (
    <NavWrapper>
      <Logo>byForecast</Logo>
      {isLoadingCurrent && <div>Searching...</div>}
      {errorCurrent && <div>{errorCurrent}</div>}
      {current && <Current current={current} />}
      <form onSubmit={handleSubmit}>
        <InputWrapper
          value={value}
          onChange={handleChange}
          placeholder="Search location"
        />
      </form>
      {isLoading && <div>Searching for location...</div>}
      {error && <div>Error fetching the location</div>}
      <Cities cities={cities} handleRemove={handleRemove} />
    </NavWrapper>
  );
};

export default Navigation;
