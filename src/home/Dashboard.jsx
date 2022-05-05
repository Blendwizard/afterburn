import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, Table, Button } from 'react-bootstrap';

const Dashboard = ({ target, deleteDashboard }) => {

  const [data, setData] = useState({});

  const today = new Date();
  const now = today.toLocaleString().split(',');
  const formattedDate = now[0];

  const handleClick = () => {
    deleteDashboard();
  }

  const loadData = () => {
    const dataObj = localStorage.getItem(1);
    setData(JSON.parse(dataObj));
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Date</th>
        <th>Calories After Burned</th>
        <th>Target Calories</th>
        <th>Surplus/Deficit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{formattedDate}</td>
        <td></td>
        <td>{data.target}</td>
        <td></td>
      </tr>
    </tbody>
  </Table>
  <Button onClick={handleClick} variant="danger">Delete Log</Button>
  </>
  )

}

export default Dashboard;