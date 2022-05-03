import { DropdownButton, Dropdown, Table } from 'react-bootstrap';
import React, { useState } from 'react';
import FlexContainer from './styled/FlexContainer.js';
import ActivityModal from './ActivityModal.jsx';
import ActivityRows from './ActivityRows.jsx';
import Totals from './Totals.jsx';

const ActivityTracker = () => {

  // Modal State and Controls
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Activity state
  const [activities, setActivities] = useState([{activity: 'Swimming', duration: '30 minutes', caloriesBurned: '200'}, {activity: 'Walking', duration: '100 minutes', caloriesBurned: '1000'}]);

  const addActivity = (e, name, time, cals) => {
    let activity = name || e.target.text;
    let duration = time || "30 minutes";
    let caloriesBurned = cals || "100";

    const newActivity = {
      activity: activity,
      duration: duration,
      caloriesBurned: caloriesBurned
    }

    setActivities(activities => [...activities, newActivity]);
  }

  return (
    <FlexContainer direction="column" align="center" color="2px solid orange" >
    <h2>Activity Tracker</h2>
    <DropdownButton id="dropdown-basic-button" title="Add Activity">
      <Dropdown.Item onClick={handleShow}>Custom</Dropdown.Item>
      <Dropdown.Item text="Weights" onClick={addActivity}>Weights</Dropdown.Item>
      <Dropdown.Item text="Cycling" onClick={addActivity}>Cycling</Dropdown.Item>
      <Dropdown.Item text="Swimming" onClick={addActivity}>Swimming</Dropdown.Item>
    </DropdownButton>

    <ActivityModal handleClose={handleClose} handleShow={handleShow} show={show} addActivity={addActivity} />

    <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Duration</th>
              <th>Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            <ActivityRows activities={activities.length > 0 ? activities : null} />
            <Totals activities={activities} />
          </tbody>
        </Table>
    </FlexContainer>
  )
}

export default ActivityTracker;
