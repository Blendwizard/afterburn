import { DropdownButton, Dropdown, Table, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import FlexContainer from '../styled/FlexContainer';
import LogRows from './LogRows.jsx';

const FoodLog = () => {
  const [foodItems, setFoodItems] = useState([{name: 'Apple', amount: '100 grams', calories: '100'}])
  const [foodName, setFoodName] = useState('');
  const [foodAmount, setFoodAmount] = useState('');
  const [foodCalories, setFoodCalories] = useState('');
  const [total, setTotal] = useState('');

  const additem = () => {
    if (!foodName || !foodAmount || !foodCalories) {
      alert('Please complete all fields to continue')
      return;
    }
    const newFood = {
      name: foodName,
      amount: foodAmount,
      calories: foodCalories
    }
    const data = JSON.parse(localStorage.getItem(1));
    data.foods = [...data.foods, newFood];
    localStorage.setItem(1, JSON.stringify(data));

    setFoodItems(foodItems => [...foodItems, newFood]);

  }

  const calculateTotal = () => {
    let sum = 0;

    foodItems.forEach((item) => {
      sum += parseInt(item.calories);
    })
    setTotal(sum.toString());
    let item = JSON.parse(localStorage.getItem(1));
    item.total = sum;
    item.delta = item.total - item.target;
    localStorage.setItem(1, JSON.stringify(item));
  }

  const handleFoodChange = (e) => {

    if (e.target.className === 'name') {
      setFoodName(e.target.value)
    } else if (e.target.className === 'amount') {
      setFoodAmount(e.target.value)
    } else {
      setFoodCalories(e.target.value)
    }
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(1));
    console.log(items.foods)
    setFoodItems(items.foods);

  }, [])

  useEffect(() => {
    calculateTotal();

  }, [foodItems])

  return (
    <FlexContainer direction="column" gap="1em" align="center">
      <h2>Food Log</h2>
      <FlexContainer direction="row">
        <Button onClick={additem} variant="success">Add Food</Button>
        <FlexContainer gap="1em" wrap="wrap" align="center">
          <label>Food/Drink</label>
          <input className="name" onChange={handleFoodChange}></input>
          <label>Amount</label>
          <input className="amount" onChange={handleFoodChange}></input>
          <label>Calories</label>
          <input type="number" onChange={handleFoodChange}></input>
        </FlexContainer>
      </FlexContainer>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Food/Beverage</th>
            <th>Serving Size/Amount</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          <LogRows foodItems={foodItems} />
          <tr>
            <td></td>
            <td>Total Intake</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </Table>
    </FlexContainer>
  )
}

export default FoodLog;