import { DropdownButton, Dropdown, Table, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import FlexContainer from '../styled/FlexContainer';
import LogRows from './LogRows.jsx';

const FoodLog = () => {
  const [foodItems, setFoodItems] = useState([ {name: 'Peanut Butter', amount: '32 grams', calories: '200'} ])
  const [foodName, setFoodName] = useState('');
  const [foodAmount, setFoodAmount] = useState('');
  const [foodCalories, setFoodCalories] = useState('');

  const additem = () => {
    const newFood = {
      name: foodName,
      amount: foodAmount,
      calories: foodCalories
    }

    setFoodItems(foodItems => [...foodItems, newFood]);

  }


  const handleFoodChange = (e) => {
    console.log(e.target.className)
    if (e.target.className === 'name') {
      setFoodName(e.target.value)
    } else if (e.target.className === 'amount') {
      setFoodAmount(e.target.value)
    } else {
      setFoodCalories(e.target.value)
    }
  }

  return (
    <FlexContainer direction="column" gap="1em" align="center" color="2px solid orange">
    <h2>Food Log</h2>
    <FlexContainer direction="row" color="2px dotted green">
      <Button onClick={additem} variant="success">Add Food</Button>
      <FlexContainer gap="1em" wrap="wrap" align="center" color="2px solid purple">
        <label>Food/Drink</label>
        <input className="name" onChange={handleFoodChange}></input>
        <label>Amount</label>
        <input className="amount" onChange={handleFoodChange}></input>
        <label>Calories</label>
        <input onChange={handleFoodChange}></input>
      </FlexContainer>
    </FlexContainer>
    <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Food/Beverage</th>
              <th>Serving Size/Amount</th>
              <th>Total Calories</th>
            </tr>
          </thead>
          <tbody>
            <LogRows foodItems={foodItems}/>
          </tbody>
        </Table>
    </FlexContainer>
  )
}

export default FoodLog;