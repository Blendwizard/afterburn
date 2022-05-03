import React, { useState, useEffect } from 'react';
import HomePage from './HomePage.jsx';
import ActivityTracker from './ActivityTracker.jsx';
import Container from './styled/Container';

const App = () => {

  const [view, setView] = useState('home');

  return (
    <>
    <h1>Afterburn</h1>
    <Container>
      {/* <HomePage /> */}
      <ActivityTracker />
    </Container>
    </>

  )

}

export default App;