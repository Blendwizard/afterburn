import React from 'react';
import FlexContainer from './styled/FlexContainer';

const Navigation = ({ changeView }) => {

  const switchToHome= () => {
    changeView('Home');
  }

  const switchToActivities = () => {
    changeView('ActivitiesTracker');
  }

  const switchToFoodLog = () => {
    changeView('FoodLog');
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