import React, { useState, useEffect } from 'react';

const Totals = ({ activities }) => {

  const [total, setTotal] = useState('');

  const calculateTotal = () => {
    let sum = 0;
    activities.forEach((activity) => {
      sum += parseInt(activity.caloriesBurned);
    })
    setTotal(sum.toString());
    let item = JSON.parse(localStorage.getItem(1));
    item.caloriesBurned = sum;
    item.afterBurning = item.total - item.caloriesBurned;
    item.delta = item.afterBurning - item.target;
    localStorage.setItem(1, JSON.stringify(item));
  }

  useEffect(() => {
    calculateTotal();
  }, [activities])

  return (
    <tr>
      <td></td>
      <td>Totals</td>
      <td>{total}</td>
    </tr>
  )
}

export default Totals;