import React, { useState, useEffect } from 'react';
import HomePage from './home/HomePage.jsx';
import ActivityTracker from './activities/ActivityTracker.jsx';
import FoodLog from './nutrition/FoodLog.jsx';
import Container from './styled/Container';

const App = () => {

  const [view, setView] = useState('home');

  return (
    <>
    <h1>Afterburn</h1>
    <Container>
      {/* <HomePage />
      <ActivityTracker /> */}
      <FoodLog />
    </Container>
    </>

  )

}

export default App;