import React, { useState, useEffect } from 'react';
import HomePage from './home/HomePage.jsx';
import ActivityTracker from './activities/ActivityTracker.jsx';
import FoodLog from './nutrition/FoodLog.jsx';
import Container from './styled/Container';
import GlobalStyle from './styled/global.css';

const App = () => {

  const [view, setView] = useState('home');

  return (
    <>
    <GlobalStyle />
    <h1>AFTERBURN</h1>
    <Container>
      <HomePage />
      {/* <ActivityTracker />
      <FoodLog /> */}
    </Container>
    </>

  )

}

export default App;