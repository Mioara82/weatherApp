import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import City from './pages/City';
import Navigation from './components/Navigation';
import { Wrapper, NavWrapper, MainWrapper } from './components/Styled';
import './style.css';

export default function App() {
  const [unit, setUnit] = useState('metric');

  const handleUnitToggle = (useImperial) => {
    useImperial ? setUnit('imperial') : setUnit('metric')
  }

  return (
    <Router>
      <Wrapper>
        <NavWrapper>
          <Navigation 
          unit= {unit}
          handleUnitToggle={handleUnitToggle}
          />
        </NavWrapper>
        <MainWrapper>
          <Switch>
            <Route exact path="/">
              <Home unit={unit}/>
            </Route>
            <Route exact path="/city/:cityId" component={City} />
          </Switch>
        </MainWrapper>
      </Wrapper>
    </Router>
  );
}
