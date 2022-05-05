import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FlexContainer from '../styled/FlexContainer.js';


const BlankHome = ({ createDashboard }) => {

  const [target, setTarget] = useState('');

  const handleClick = () => {
    if (target > 0) {
      createDashboard(parseInt(target));
    }
  }

  const handleChange = (e) => {
    setTarget(e.target.value)
  }

  return (
    <>
    <FlexContainer align="center">
      <Button onClick={handleClick}>New Log</Button>
      <label>Target Calories</label>
      <input onChange={handleChange} type="number"></input>
    </FlexContainer>
    </>
  )
}

export default BlankHome;

