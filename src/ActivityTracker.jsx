import { DropdownButton, Dropdown, Table } from 'react-bootstrap';
import React, { useState } from 'react';
import FlexContainer from './styled/FlexContainer.js';
import ActivityModal from './ActivityModal.jsx';

const ActivityTracker = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <FlexContainer direction="column" align="center" color="2px solid orange" >
    <h2>Activity Tracker</h2>
    <DropdownButton id="dropdown-basic-button" title="Add Activity">
      <Dropdown.Item onClick={handleShow}>Custom</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Weights</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Cycling</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Swimming</Dropdown.Item>
    </DropdownButton>

    <ActivityModal handleClose={handleClose} handleShow={handleShow} show={show} />

    <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Duration</th>
              <th>Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Biking</td>
              <td>30 min</td>
              <td>200</td>
            </tr>
          </tbody>
        </Table>
    </FlexContainer>
  )
}

export default ActivityTracker;
