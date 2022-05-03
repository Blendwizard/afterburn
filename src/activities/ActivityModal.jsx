import { Modal, Button, Form } from 'react-bootstrap';
import React, {useState} from 'react';

const ActivityModal = ({ show, handleClose, handleShow, addActivity }) => {

  const [activityName, setActivityName] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');

  const handleSubmit = () => {
    addActivity(null, activityName, duration, caloriesBurned)
  }


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Custom Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Activity Name</Form.Label>
              <Form.Control
                type="activity"
                placeholder="Hiking, Jump Rope, Flying Kites..."
                autoFocus
                autoComplete="off"
                value={activityName}
                onChange={e => setActivityName(e.target.value)}
              />
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="duration"
                placeholder="30 minutes"
                autoComplete="off"
                value={duration}
                onChange={e => setDuration(e.target.value)}
              />
               <Form.Label>Calories Burned</Form.Label>
              <Form.Control
                type="calories"
                placeholder="200"
                autoComplete="off"
                value={caloriesBurned}
                onChange={e => setCaloriesBurned(e.target.value)}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose, handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ActivityModal;