import React, { useState } from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import FlexContainer from '../styled/FlexContainer.js';
import Dashboard from './Dashboard.jsx';
import BlankHome from './BlankHome.jsx';

const HomeContent = () => {

  const [view, setView] = useState(false);
  const [target, setTarget] = useState(0);

  const createDashboard = (startingTarget) => {

    if (startingTarget < 1500 || startingTarget > 12000) {
      alert('Please input a number between 1500 and 12000');
      return;
    } else {
      setTarget(startingTarget)
      setView(true);
    }
  }

  return (
    <>
      <FlexContainer direction="column" align="center" color="2px solid green" >
      {!view ? <BlankHome createDashboard={createDashboard} />  : <Dashboard target={target} />}
      </FlexContainer>
    </>
  )

}

export default HomeContent;