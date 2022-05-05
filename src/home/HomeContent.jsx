import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import FlexContainer from '../styled/FlexContainer.js';
import Dashboard from './Dashboard.jsx';
import BlankHome from './BlankHome.jsx';

const HomeContent = () => {


  const [view, setView] = useState(false);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    if (localStorage.getItem(1) !== null) {
      setView(true)
    }
  }, []);

  const createDashboard = (startingTarget) => {
    if (startingTarget < 1500 || startingTarget > 12000 || startingTarget === NaN) {
      alert('Please input a number between 1500 and 12000');
      return;
    } else {
      setTarget(startingTarget)
      localStorage.setItem(1, JSON.stringify({target: startingTarget, delta: 0, caloriesBurned: 0, total: 0, afterBurning: 0}));
      setView(true);
    }
  }

  const deleteDashboard = () => {
    localStorage.removeItem(1)
    setView(false);
  }

  return (
    <>
      <FlexContainer direction="column" align="center" >
      {!view ? <BlankHome createDashboard={createDashboard} />  : <Dashboard target={target} deleteDashboard={deleteDashboard}/>}
      </FlexContainer>
    </>
  )

}

export default HomeContent;