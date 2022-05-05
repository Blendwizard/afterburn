import React from 'react';
import FlexContainer from './styled/FlexContainer';

const Navigation = ({ changeView }) => {

  const switchToHome= () => {
    changeView('Home');
  }

  const switchToActivities = () => {
    const check = localStorage.getItem(1);
    if (check !== null) {
      changeView('ActivitiesTracker');
    }

  }

  const switchToFoodLog = () => {
    const check = localStorage.getItem(1);
    if (check !== null) {
      changeView('FoodLog');
    }
  }


  return (
    <FlexContainer justify="center">
      <h3 onClick={switchToActivities}>Activity Tracker</h3>
      <h3 onClick={switchToHome}>Home</h3>
      <h3 onClick={switchToFoodLog}>Nutrition Log</h3>
    </FlexContainer>
  )
}

export default Navigation;