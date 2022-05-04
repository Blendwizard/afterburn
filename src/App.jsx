import React, { useState, useEffect } from 'react';
import Navigation from './Navigation.jsx';
import HomePage from './home/HomePage.jsx';
import ActivityTracker from './activities/ActivityTracker.jsx';
import FoodLog from './nutrition/FoodLog.jsx';
import Container from './styled/Container';
import GlobalStyle from './styled/global.css';

const App = () => {

  const [view, setView] = useState('Home');

  const changeView = (view) => {
    setView(view)
  }

  return (
    <>
    <GlobalStyle />
    <h1>AFTERBURN</h1>
    <Navigation changeView={changeView}/>
    <Container>
      {view === 'Home' ? <HomePage />
      :
      view === 'ActivitiesTracker' ? <ActivityTracker />
      :
      view === 'FoodLog' ? <FoodLog /> : null}
      {/* <ActivityTracker />
      <FoodLog /> */}
    </Container>
    </>

  )

}

export default App;